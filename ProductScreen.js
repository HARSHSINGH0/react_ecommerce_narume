import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap"
import Rating from "../components/Rating"
// import products from "../products"
import axios from "axios"
function ProductScreen({ match }) {
  const [product, setProduct] = useState([])
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [])
  return (
    <div>
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
                    {product.countInStock > 0 && product.countInStock < 6
                      ? product.countInStock + " item left hurry!!"
                      : product.countInStock > 0
                      ? "In stock"
                      : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn btn-success w-100"
                  disabled={product.countInStock === 0}
                  type="button"
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <hr class="mt-3 mb-5" />
      <Link
        to="/"
        className="btn btn-secondary my-3 w-100 border border-bottom"
      >
        Go back
      </Link>
    </div>
  )
}

export default ProductScreen
