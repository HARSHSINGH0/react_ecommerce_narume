import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
//import products from "../products" //removed because we want it to fetch from backend
import { ListGroup } from "react-bootstrap"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { listProducts } from "../actions/productActions"
function HomeScreen() {
  const disptach = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { error, loading, products } = productList

  useEffect(() => {
    disptach(listProducts())
  }, [disptach])
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   async function fetchProducts() {
  //     const { data } = await axios.get("api/products/")
  //     setProducts(data)
  //   }
  // }, [])

  return (
    <div>
      <h1>Latest Product</h1>
      {loading ? (
        <h2>Loading....</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default HomeScreen
