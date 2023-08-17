import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import {Home, Nav, Footer, Product, Cart, Checkout, OrderPlaced, Shop, About, Contact, SignIn, CreateAccount} from "./components"
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/createaccount' element={<CreateAccount/>}/>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Home/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart setAmount={setAmount}/>}/>
          <Route path='/checkout' element={<Checkout amount={amount}/>}/>
          <Route path='/orderplaced' element={<OrderPlaced/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
