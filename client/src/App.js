import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./components/shr/Footer";
import Header from "./components/shr/Header";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/pages/Product";
import ProductsState from "./context/productsContext/productsState";

const App = () => {
  return (
    <ProductsState>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" exact component={Home} />
            <Route path="/product/:id" exact component={Product} />
          </Container>
        </main>
        <Footer />
      </Router>
    </ProductsState>
  );
};

export default App;
