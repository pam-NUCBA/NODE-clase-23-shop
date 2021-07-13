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
import Login from "./components/pages/Login";
import UserState from "./context/userContext/userState";
import Register from "./components/pages/Register";
import Checkout from "./components/pages/Checkout";
import Payment from "./components/pages/Payment";

const App = () => {

// console.log(process.env.REACT_APP_MP_ACCESS_TOKEN);
  
  return (
    <CartState>
      <UserState>
        <ProductsState>
          <Router>
            <Header />
            <main className="py-3">
              <Container>
              <Route path="/" exact component={Checkout} />
                {/* <Route path="/" exact component={Home} /> */}
                <Route path="/product/:id" exact component={Product} />
                {/* pongo los param opcionales, porque si apretara cart directamente, no habría cantidad que mostrar! */}
                <Route path="/cart/:id?" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Container>
            </main>
            <Footer />
          </Router>
        </ProductsState>
      </UserState>
    </CartState>
  );
};

export default App;
