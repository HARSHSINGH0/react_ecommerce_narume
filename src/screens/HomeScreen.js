import React from "react"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import products from "../products"
import { ListGroup } from "react-bootstrap"
function HomeScreen() {
  return (
    <div>
      <h1>Latest Product</h1>
      <ListGroup variant="success">
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </ListGroup>
    </div>
  )
}

export default HomeScreen
