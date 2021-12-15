import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "../../assets/design/styles.css";
import { List, ListItem, ListItemText } from "@mui/material";

const MngProductForm = () => {
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
  const [productCategory, setProductCategory] = useState("");

  const deleteIngredientRow = (id) => {
    //   (id,1) telling how many row going to delete
    ingredients.splice(id, 1);
    setIngredients([...ingredients]);
  };

  const deleteInstructionsRow = (id) => {
    instructions.splice(id, 1);
    setInstruction([...instructions]);
  };

  return (
    <Container>
      <Form autoComplete="off">
        <Form.Group>
          <Form.Control
            className="p-2 mb-3 formInputBox"
            type="text"
            placeholder="Product Name"
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
            onChange={(event) => {
              setProductDescription(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Select
            className="p-2 mb-3 formInputBox"
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
          <Form.Group as={Col}>
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
          <Form.Group as={Col}>
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
          <Form.Group as={Col}>
            <button
              className="w-25 mb-3 button"
              type="button"
              onClick={() => {
                setIngredients([
                  ...ingredients,
                  { name: ingredientName, value: ingredientQty },
                ]);
              }}
            >
              +
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
                    className="w-25 mb-3 button"
                    type="button"
                    onClick={() => {
                      deleteIngredientRow(i);
                    }}
                  >
                    -
                  </button>
                </ListItem>
              );
            })}
          </List>
        </Form.Group>
        <Row>
          <Form.Group as={Col}>
            <Form.Control
              className="p-2 mb-3 formInputBox"
              type="Number"
              placeholder="Step"
              value={cookingStep}
              onChange={(event) => {
                setCookingStep(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control
              className="p-2 mb-3 formInputBox"
              type="text"
              placeholder="Cooking Instraction"
              value={cookingInstruction}
              onChange={(event) => {
                setCookingInstruction(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <button
              className="w-25 mb-3 button"
              type="button"
              onClick={() => {
                setInstruction([
                  ...instructions,
                  { name: cookingStep, value: cookingInstruction },
                ]);
              }}
            >
              +
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
                    className="w-25 mb-3 button"
                    type="button"
                    onClick={() => {
                      deleteInstructionsRow(i);
                    }}
                  >
                    -
                  </button>
                </ListItem>
              );
            })}
          </List>
        </Form.Group>
        <Form.Group>
          <div className="row">
            <div className="col-lg-4">
              <button
                className="w-100 mb-3 button"
                type="button"
                onClick={() => {}}
              >
                Add User
              </button>
            </div>
            <div className="col-lg-4">
              <button
                className="w-100 mb-3 button"
                type="addUser"
                onClick={() => {}}
              >
                Update User
              </button>
            </div>
            <div className="col-lg-4">
              <button
                className="w-100 mb-3 button"
                type="addUser"
                onClick={() => {}}
              >
                Delete User
              </button>
            </div>
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default MngProductForm;
