import React from "react"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap"
import Rating from "../components/Rating"
import products from "../products"

function ProductScreen({ match }) {
  const product = products.find((p) => p._id == match.params.id)
  return (
    <div>
      <Link to="/" className="btn btn-secondary my-3">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#FF9900"}
              />
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col mc={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item variant="success">
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn btn-success w-100"
                  disabled={product.countInStock == 0}
                  type="button"
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
