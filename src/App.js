import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Product from './components/Product';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderPlaced from './components/OrderPlaced';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/createaccount' element={<CreateAccount/>}/>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Home/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
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
