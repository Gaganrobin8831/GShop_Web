import './App.css';
import { Routes, Route } from 'react-router-dom';

// Import all the pages
import Home from './pages/home.pages';
import Collection from './pages/collection.pages';
import About from './pages/about.pages';
import Contact from './pages/contact.pages';
import Product from './pages/product.pages';
import Cart from './pages/cart.pages';
import Login from './pages/login.pages';
import PlaceOrder from './pages/placeOrder.pages';
import Orders from './pages/order.pages';

import Navbar from './components/navbar/navbar';
import SearchBar from './components/searchBar';
import Footer from './components/footer/footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
