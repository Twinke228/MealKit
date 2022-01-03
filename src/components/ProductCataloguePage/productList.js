import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../assets/design/styles.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../api/firebase";
import { Grid } from "@mui/material";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useStyles from "../../components/ProductCataloguePage/styles";

const ProductList = (props) => {
  //constants
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const productsCollectionRef = collection(db, "products");
  const classes = useStyles();

  // function for displaying product list
  const fetchData = async () => {
    console.log("Fetching...");
    const querySnapshot = await getDocs(productsCollectionRef);
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      productData.id = doc.id;
      setProducts((product) => [...product, productData]);
    });
  };

  //load fetchData once the page is render and check of filtered data
  useEffect(() => {
    setProducts([]);
    fetchData();
    if (props.category !== "") {
      setIsFiltered(true);
    }
  }, [props.category]);

  const navigate = useNavigate();

  return (
    <Container>
      <Grid container justify="center" className="p-5" spacing={4}>
        {isFiltered
          ? products
              .filter((product) => product.productCategory === props.category)
              .map((prod) => {
                console.log("menu name: ", prod.productName);
                return (
                  <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.root}>
                      <CardMedia
                        className={classes.media}
                        image={prod.productImage}
                        title={prod.productName}
                      />
                      <CardContent>
                        <div className={classes.CardContent}>
                          <Typography
                            className="brownBoldFont fw-bold"
                            gutterBottom
                          >
                            {prod.productName}
                          </Typography>
                          <Typography className=" fw-bold" gutterBottom>
                            RM{prod.productPrice}
                          </Typography>
                          <Typography
                            className="pt-2"
                            variant="body2"
                            color="textSecondary"
                            gutterBottom
                          >
                            {prod.productDescription}
                          </Typography>
                        </div>
                      </CardContent>
                      <CardActions
                        disableSpacing
                        className={classes.CardActions}
                      >
                        <IconButton
                          aria-label="View Product Details"
                          onClick={() => {
                            const clickedProduct = prod;
                            setProduct(clickedProduct);
                            console.log("product ", clickedProduct);
                            if (clickedProduct !== null) {
                              navigate("/individualproduct", {
                                state: clickedProduct,
                              });
                            } else {
                              navigate("/productcatalogue");
                            }
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })
          : products.map((prod) => {
              console.log("all menu showed");
              return (
                <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media}
                      image={prod.productImage}
                      title={prod.productName}
                    />
                    <CardContent>
                      <div className={classes.CardContent}>
                        <Typography
                          className="brownBoldFont fw-bold"
                          gutterBottom
                        >
                          {prod.productName}
                        </Typography>
                        <Typography className=" fw-bold" gutterBottom>
                          RM{prod.productPrice}
                        </Typography>
                        <Typography
                          className="pt-2"
                          variant="body2"
                          color="textSecondary"
                          gutterBottom
                        >
                          {prod.productDescription}
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions disableSpacing className={classes.CardActions}>
                      <IconButton
                        aria-label="View Product Details"
                        onClick={() => {
                          const clickedProduct = prod;
                          setProduct(clickedProduct);
                          console.log("product ", clickedProduct);
                          if (clickedProduct !== null) {
                            navigate("/individualproduct", {
                              state: clickedProduct,
                            });
                          } else {
                            navigate("/productcatalogue");
                          }
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
      </Grid>
    </Container>
  );
};

export default ProductList;
