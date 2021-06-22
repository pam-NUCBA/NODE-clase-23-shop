import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./components/shr/Footer";
import Header from "./components/shr/Header";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/pages/Product";
import ProductsState from "./context/productsContext/productsState";
import CartState from "./context/cartContext/cartState";
import Cart from "./components/pages/Cart";

const App = () => {
  return (
    <CartState>
      <ProductsState>
        <Router>
          <Header />
          <main className="py-3">
            <Container>
              <Route path="/" exact component={Home} />
              <Route path="/product/:id" exact component={Product} />
              {/* pongo los param opcionales, porque si apretara cart directamente, no habría cantidad que mostrar! */}
              <Route path="/cart/:id?" component={Cart} />
            </Container>
          </main>
          <Footer />
        </Router>
      </ProductsState>
    </CartState>
  );
};

export default App;
