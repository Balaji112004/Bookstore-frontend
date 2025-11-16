import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import LoginSignup from "./LoginSignup";
import Cart from "./Cart";
import Order from "./Order";
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailure from "./PaymentFailure";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="loginsignup" element={<LoginSignup />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
          <Route path="payment-failure" element={<PaymentFailure />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
