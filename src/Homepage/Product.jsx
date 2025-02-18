import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  return (
    <>
      <Card style={{ 
        width: "inherit", 
        border: '0'                
      }}>
        <Card.Img
          variant="top"
          src={props.imgSrc}
          alt="Product image"
          width="600"
          height="400"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="product-actions">
            <Button variant="secondary">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
