import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Nav from "./Nav";
import LoginSignup from './LoginSignup';
import Cart from "./Cart";
import Order from "./Order";
import Home from "./Home";
import PaymentSuccess from './PaymentSuccess';
import PaymentFailure from './PaymentFailure';

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Nav/>}>
                  <Route index="home" element={<Home/>}></Route>
                  <Route path="loginsignup" element={<LoginSignup/>}></Route>
                  <Route path="home" element={<Home/>}></Route>
                  <Route path="cart" element={<Cart/>}></Route>
                  <Route path="order" element={<Order/>}></Route>
                  <Route path="/payment-success" element={<PaymentSuccess />} />

                  {/* <Route path="payment-success" element={<PaymentSuccess />} />
                  <Route path="payment-failure" element={<PaymentFailure />} /> */}

              </Route> 
          </Routes>
       </BrowserRouter>
  </>
  )
}

export default App
