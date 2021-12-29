import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../assets/design/styles.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../api/firebase";
import ChineseFood from "../../assets/images/chineseFood.JPG";
import WesternFood from "../../assets/images/westernFood.JPG";
import VegetarianFood from "../../assets/images/vegetarianFood.JPG";
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

const ProductList = () => {
  //constants
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const productsCollectionRef = collection(db, "products");
  const classes = useStyles();

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

  const navigate = useNavigate();

  const linkChineseFood = () => {
    navigate("../");
  };
  const linkWesternFood = () => {
    navigate("../");
  };
  const linkVegetarianFood = () => {
    navigate("../");
  };

  return (
    <Container>
      <Grid container justify="center" className="p-5" spacing={4}>
        {products.map((prod) => {
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
                    <Typography className="brownBoldFont fw-bold" gutterBottom>
                      {prod.productName}
                    </Typography>
                    <Typography variant="p" className=" fw-bold" gutterBottom>
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
                  <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                  </IconButton>
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
