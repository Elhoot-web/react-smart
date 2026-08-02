import React, { useState } from "react";
import Nav from "./Components/Nav";
import './Components/Nav.css';
import {BrowserRouter} from 'react-router-dom';
import Rout from "./Components/Rout";
import Footer from './Components/Footer';
import Products from './Components/Products';


const App = () => {
  //Add To cart
  const [cart, setCart] = useState([])
//shop page product
const [Shop, setShop] = useState(Products)
//Shop search filter
const [search, setSearch] = useState('')
//Shop category filter
const Filter = (x) =>
{
  const cateFilter = Products.filter((products) =>
   {
     return products.cat === x
  })
  setShop(cateFilter)
}
const allcateFilter = () =>
{
  setShop(Products)
}
//Shop search filter
const searchlength =(search || []).length === 0
const searchproduct = () =>
{
if(searchlength)
{
  alert("Please Search Something !")
  setShop(Products)
}
else
{ 
      const searchFilter = Products.filter((x) => 
      {
       return x.cat === search
      })
      setShop(searchFilter)
   } 
}
//Add To Cart
const addtocart = (product) =>
{
  const exist = cart.find((x) => {
    return x.id === product.id
  })
  if(exist)
  {
    alert("This product is alleardy added in cart Elhoot")
  }
  else
  {
  setCart([...cart, {...product, qty:1}])
  alert("Added To cart Elhoot ")
    
  }
}
  //  console.log(cart);
  return(
    <>
    <BrowserRouter >
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    <Rout setCart={setCart} cart={cart} shop={Shop} Filter={Filter} allcateFilter={allcateFilter} addtocart={addtocart}/>
    <Footer />
    </BrowserRouter>
    </>

  ) 
  
  
}

export default App;
 

