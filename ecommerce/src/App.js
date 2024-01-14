import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"></ShopCategory>}></Route>
        <Route path='/womens' element={<ShopCategory banner={ women_banner} category="women"></ShopCategory>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />}></Route>
        <Route path='/product' element={<Product></Product>}>
          <Route path=':producrId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignUp/>}></Route>

      </Routes>
      <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
