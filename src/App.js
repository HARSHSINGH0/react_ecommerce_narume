import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <header>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
          </Container>
        </main>
        <Footer />
      </header>
    </Router>
  )
}

export default App
