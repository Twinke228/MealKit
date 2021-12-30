import React from "react";
import { Container, Card } from "react-bootstrap";
import "../../assets/design/styles.css";
import ChineseFood from "../../assets/images/chineseFood.JPG";
import WesternFood from "../../assets/images/westernFood.JPG";
import VegetarianFood from "../../assets/images/vegetarianFood.JPG";

const Category = () => {
  return (
    <Container>
      <div className="row mt-5">
        <p className="brownBoldFont text-center">
          There’s{" "}
          <p
            style={{
              display: "inline",
              color: "orange",
            }}
          >
            something{" "}
          </p>
          for everyone!
        </p>
        <div className="col-lg-4 justify-content-around mt-2">
          <Card>
            <Card.Img variant="top" src={ChineseFood} />
            <Card.Body>
              <Card.Title className="brownBoldFont fw-bold">Chinese</Card.Title>
              <Card.Text>
                Our chinese food recipes are all taste very authentic and comes
                with variety of choices to choose from.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 justify-content-around mt-2">
          <Card>
            <Card.Img variant="top" src={WesternFood} />
            <Card.Body>
              <Card.Title className="brownBoldFont fw-bold">Western</Card.Title>
              <Card.Text>
                Western food arethe easiest dish to cook in our available menu
                yet it still provides a restaurant taste.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 justify-content-around mt-2">
          <Card>
            <Card.Img variant="top" src={VegetarianFood} />
            <Card.Body>
              <Card.Title className="brownBoldFont fw-bold">
                Vegetarian
              </Card.Title>
              <Card.Text>
                Meatless yet still flavourful. 100% all meats are made from base
                plant.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Category;
