import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "../../assets/design/styles.css";
import { useAuth } from "../../contexts/AuthContext";
import { List, ListItem, ListItemText } from "@mui/material";
import { storage } from "../../api/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UpdateProduct = (props) => {
  //constants
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQty, setIngredientsQty] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [cookingStep, setCookingStep] = useState("");
  const [cookingInstruction, setCookingInstruction] = useState("");
  const [instructions, setInstruction] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("Chinese");
  const [productImage, setProductImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (props.product.productName !== "") {
      setProductName(props.product.productName);
    }
    if (props.product.productPrice !== "") {
      setProductPrice(props.product.productPrice);
    }
    if (props.product.productStock !== "") {
      setProductStock(props.product.productStock);
    }
    if (props.product.productDescription !== "") {
      setProductDescription(props.product.productDescription);
    }
    if (props.product.productCategory !== "") {
      setProductCategory(props.product.productCategory);
    }
    if (props.product.ingredients !== "") {
      setIngredients(props.product.ingredients);
    }
    if (props.product.instructions !== "") {
      setInstruction(props.product.instructions);
    }
  }, [
    props.product.productName,
    props.product.productPrice,
    props.product.productStock,
    props.product.productDescription,
    props.product.productCategory,
    props.product.ingredients,
    props.product.instructions,
  ]);

  //to delete the ingredients row (+)
  const deleteIngredientRow = (id) => {
    //   (id,1) telling how many row going to delete
    ingredients.splice(id, 1);
    setIngredients([...ingredients]);
  };

  //to delete the instruction row (+)
  const deleteInstructionsRow = (id) => {
    instructions.splice(id, 1);
    setInstruction([...instructions]);
  };

  //set image
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setProductImage(e.target.files[0]);
    }
  };

  //save images to firebase storage with appropraite link
  // const handleUploadImage = () => {
  //   const uploadImage = storage
  //     .ref(`images/${productImage.name}`)
  //     .put(productImage);
  //   uploadImage.on(
  //     "state_changed",
  //     (snapshot) => {},
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(productImage.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           console.log("image change link", url);
  //           setImageUrl(url);
  //         });
  //     }
  //   );
  // };

  //passing product values to update product function
  // const { updateProduct } = useAuth();
  // const createProduct = async () => {
  //   if (
  //     productImage !== "" &&
  //     productName !== "" &&
  //     productPrice !== "" &&
  //     productStock !== "" &&
  //     productDescription !== "" &&
  //     productCategory !== "" &&
  //     ingredients.length !== 0 &&
  //     instructions.length !== 0
  //   ) {
  //     handleUploadImage();
  //     console.log("image url: ", imageUrl);
  //     await updateProduct(
  //       imageUrl,
  //       productName,
  //       productPrice,
  //       productStock,
  //       productDescription,
  //       productCategory,
  //       ingredients,
  //       instructions
  //     );
  //     console.log("Update Product Successfully");
  //     toast.success("Update Product Successfully");
  //   } else {
  //     console.log("Unable to update product");
  //     toast.error("Unable to update product");
  //   }
  // };

  const { updateProduct } = useAuth();
  const createProduct = async () => {
    if (
      productImage !== "" &&
      productName !== "" &&
      productPrice !== "" &&
      productStock !== "" &&
      productDescription !== "" &&
      productCategory !== "" &&
      ingredients.length !== 0 &&
      instructions.length !== 0
    ) {
      const storageDb = getStorage();
      const productImageRef = ref(storageDb, `images/${productImage.name}`);
      await uploadBytes(productImageRef, productImage).then((snapshot) => {
        console.log("Uploaded the image!");
      });
      await getDownloadURL(ref(storageDb, productImageRef)).then((url) => {
        console.log("This us the URL! ", url);
        updateProduct(
          props.product.id,
          url,
          productName,
          productPrice,
          productStock,
          productDescription,
          productCategory,
          ingredients,
          instructions
        );
      });
      console.log("successfully added new product to firestore");
      toast.success("Upload New Product Successfully");
    } else {
      console.log("Error - unable to add value to firestore");
      toast.error("Upload New Product Unsuccessfully");
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Form autoComplete="off">
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="file"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(event) => {
              setProductName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="text"
            placeholder="Price"
            value={productPrice}
            onChange={(event) => {
              setProductPrice(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="number"
            placeholder="Stock"
            value={productStock}
            onChange={(event) => {
              setProductStock(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            as="textarea"
            rows={3}
            placeholder="Description"
            value={productDescription}
            onChange={(event) => {
              setProductDescription(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Select
            className="p-2 mb-3 formInputBox"
            value={productCategory}
            onChange={(event) => {
              setProductCategory(event.target.value);
            }}
          >
            <option>Chinese</option>
            <option>Western</option>
            <option>Vegetarian</option>
          </Form.Select>
        </Form.Group>
        <Row>
          <Form.Group as={Col} className="col-lg-3">
            <Form.Control
              className="p-2 mb-3 formInputBox"
              type="text"
              placeholder="Quantity"
              value={ingredientQty}
              onChange={(event) => {
                setIngredientsQty(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} className="col-lg-7">
            <Form.Control
              className="p-2 mb-3 formInputBox"
              type="text"
              placeholder="Ingredient Name"
              value={ingredientName}
              onChange={(event) => {
                setIngredientName(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} className="col-lg-2">
            <button
              className="w-20 mb-3 buttonMini"
              type="button"
              onClick={() => {
                setIngredients([
                  ...ingredients,
                  { name: ingredientName, value: ingredientQty },
                ]);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Form.Group>
        </Row>
        <Form.Group>
          <List dense={true}>
            {ingredients.map((ingredient, i) => {
              return (
                <ListItem>
                  <ListItemText
                    primary={ingredient.name}
                    secondary={ingredient.value}
                  />
                  <button
                    className="w-25 mb-3 buttonMini"
                    type="button"
                    onClick={() => {
                      deleteIngredientRow(i);
                    }}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </ListItem>
              );
            })}
          </List>
        </Form.Group>
        <Row>
          <Form.Group as={Col} className="col-lg-3">
            <Form.Control
              className="p-2 mb-3 formInputBox"
              type="text"
              placeholder="Step"
              value={cookingStep}
              onChange={(event) => {
                setCookingStep(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} className="col-lg-7">
            <Form.Control
              className="p-2 mb-3 formInputBox"
              type="text"
              placeholder="Cooking Instruction"
              value={cookingInstruction}
              onChange={(event) => {
                setCookingInstruction(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} className="col-lg-2">
            <button
              className="w-20 mb-3 buttonMini"
              type="button"
              onClick={() => {
                setInstruction([
                  ...instructions,
                  { name: cookingStep, value: cookingInstruction },
                ]);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Form.Group>
        </Row>
        <Form.Group>
          <List dense={true}>
            {instructions.map((instructions, i) => {
              return (
                <ListItem>
                  <ListItemText
                    primary={instructions.name}
                    secondary={instructions.value}
                  />
                  <button
                    className="w-25 mb-3 buttonMini"
                    type="button"
                    onClick={() => {
                      deleteInstructionsRow(i);
                    }}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </ListItem>
              );
            })}
          </List>
        </Form.Group>
        <Form.Group>
          <div className="row">
            <div>
              <button
                className="w-100 mb-3 button"
                type="button"
                onClick={createProduct}
              >
                Update Menu
              </button>
            </div>
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UpdateProduct;
