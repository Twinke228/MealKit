import React, { useEffect, useState } from "react";
import { Button, Container, Image, Modal } from "react-bootstrap";
import "../../../assets/design/styles.css";
import SmallBanner from "../../../components/smallBanner";
import ManageTab from "../../../components/AdminDashboard/manageTab";
import MngProductForm from "../../../components/adminManage/mngProductForm";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { db } from "../../../api/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import UpdateProduct from "../../../components/adminManage/UpdateProduct";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../contexts/AuthContext";

//add product
const MngProductPage = () => {
  //constants
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const productsCollectionRef = collection(db, "products");
  const [modalShow, setModalShow] = useState(false);

  // function for displaying product list
  const fetchData = async () => {
    const querySnapshot = await getDocs(productsCollectionRef);
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      productData.id = doc.id;
      setProducts((product) => [...product, productData]);
    });
  };

  //load fetchData once the page is render
  useEffect(() => {
    fetchData();
  }, []);

  //edit product via Modal - react-toastify
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Menu
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* content */}
          <UpdateProduct product={product} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  //passing product values to delete product function
  const { deleteProduct } = useAuth();
  const removeProduct = async (prod) => {
    const productStorage = getStorage();
    const productImageRef = ref(productStorage, prod.productImage);
    await deleteObject(productImageRef)
      .then(() => {
        console.log("Image has been deleted!");
        deleteProduct(prod.id);
        console.log("Delete product Successfully");
        toast.success("Delete Product Successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Delete Product Unsuccessful");
      });
  };

  return (
    <Container fluid className="p-0 bgBaseColour">
      <ToastContainer />
      <SmallBanner />
      <ManageTab />
      <Container>
        <div className="row">
          <p className=" text-center pt-5 brownBoldFont">Manage Product</p>
          <div className="col-lg-5 p-5">
            <MngProductForm />
          </div>
          <div className="col-lg-7 p-5">
            <p className="blacksoftFont">List of Menus</p>
            <div className="table-wrap">
              <table className="table table-stripped table-sm">
                <thead className="thead-light">
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((prod) => {
                    return (
                      <tr key={prod.id}>
                        <td>
                          <Image
                            src={prod.productImage}
                            width={50}
                            height={50}
                            rounded
                          />
                        </td>
                        <td>{prod.productName}</td>
                        <td>{prod.productPrice}</td>
                        <td>{prod.productStock}</td>
                        <td style={{ maxWidth: 200 }} className="text-truncate">
                          {prod.productDescription}
                        </td>
                        <td>{prod.productCategory}</td>
                        <td>
                          <div className="row">
                            <div className="col-lg-6">
                              <Button
                                variant="primary"
                                onClick={() => {
                                  const clickedProduct = prod;
                                  setProduct(clickedProduct);
                                  console.log("product ", product);
                                  setModalShow(true);
                                }}
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </Button>

                              <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                              />
                            </div>
                            <div className="col-lg-6">
                              <Button
                                variant="danger"
                                onClick={() => {
                                  removeProduct(prod);
                                }}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </Button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default MngProductPage;
