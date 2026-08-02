import React, { useEffect, useState } from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Home_product from './Home_product';
import { AiFillEye, AiFillSafetyCertificate } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Home = ({addtocart}) => {
  //product category
  const [newProduct, setNewProduct] = useState([]);
  const [FeaturedProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  // Trending product
  const [trendingProduct, setTrendingProduct] = useState(Home_product)
  // filter of tranding product
  const filtercate = (x) => 
  {
    const filterproduct = Home_product.filter((curElm) => 
    {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  //All Trending product
  const allTrendingProduct = () =>
  {
    setTrendingProduct(Home_product)
  }
  //product type
  useEffect(() => 
  {
    productcategory()
  })
  const productcategory = () =>
  {
    //New Product
   const newcategory = Home_product.filter((x) =>  
   {
       return x.type === 'new'
    })
    setNewProduct(newcategory)

    //Featured Product
    const Featuredcategory = Home_product.filter((x) => 
    {
      return x.type === 'Featured'
    })
    setFeaturedProduct(Featuredcategory)

    //Top Product
    const topcategory = Home_product.filter((x) => 
    {
       return x.type === 'top'
    })
    setTopProduct(topcategory)
  }
    return(
        <>
       <div className="home">
       <div className="top_banner">
       <div className="contant">
           <h3>silver aluminum</h3>
           <h2>Apple Watch</h2>
           <p>30% off at your first odder</p>
           <Link to='/shop' className='link'>Shop Now</Link>
         </div> 
       </div>
       <div className="trending">
       <div className="container">
       <div className="left_box">
       <div className="header">
       <div className="heading">
         <h2 onClick={() => allTrendingProduct()}>trending product</h2>
         </div>
       <div className="cate">
          <h3 onClick={() => filtercate ('new')}>New</h3>
          <h3 onClick={() => filtercate ('Featured')}>Featured</h3>
          <h3 onClick={() => filtercate ('top')}>Top Selling</h3>
       </div>
        </div>
       <div className="products">
       <div className="container">
           {
            trendingProduct.map((curElm) => 
            {
               return(
                <>
                
                <div className="box">
                  <div className="img_box">
                    <img src={curElm.imgs} alt=""></img>
                  <div className="icon">
                    <div className="icon_box"> 
                    <AiFillEye />                     
                     </div> 
                     <div className="icon_box"> 
                     <AiFillHeart />                   
                     </div> 
                   </div>
                  </div>
                  <div className="info">
                    <h3>{curElm.Name}</h3>
                    <p>${curElm.price}</p>
                    <button className="btn" onClick={() => addtocart (curElm)}>Add to Cart</button>
                    </div> 
                </div>
                </>
               )
            })
           }
       </div>
       <button>Show More</button>
       </div>
      </div>
       <div className="right_box">
       <div className="right_container">
       <div className="testimonial">
        <div className="head">
          <h3>our testimonial</h3>
        </div>
        <div className="detail">
            <div className="img_box">
              <img src="imgs/T1.avif" alt="testimonial"></img>
            </div>
            <div className="info">
              <h3>stephan robot</h3>
              <h4>web designer</h4>
              <p>A good example of a paragraph contains a topic sentence, details and a conclusion. </p>
            </div>
          </div>       
       </div>  
       <div className="newsletter">
       <div className="head">
          <h3>newsletter</h3>
          </div>   
          <div className="form">
            <p>join our malling list</p>
            <input type="email" placeholder="E-mail" autoComplete="off"></input>
            <button>Subscribe</button>
            <div className="icon_box">
               <div className="icon">
               <BiLogoFacebook />
               </div> 
               <div className="icon">
               <IoLogoTwitter />
                </div>              
               <div className="icon">
               <BiLogoInstagram />
                </div>              
               <div className="icon">
               <BiLogoYoutube />
                </div>              
            </div>
          </div>
        </div>  
       </div>
       <div className="banner">
       <div className='image'>
           <img src='imgs/hot2.jpg'  alt=''></img>
            </div>
            <div className="btn">
            <button >Elhoot$</button>
            </div>
               </div> 
       </div>
         </div>  
        </div> 
        <div className="banners">
          <div className="container">
            <div className="left_box">
              <div className="box">
                <img src="imgs/Multi-Banner-1.avif" alt="banner"></img>
              </div>
              <div className="box">
                <img src="imgs/Multi-banner-2.avif" alt="banner"></img>
              </div>
            </div>
            <div className="right_box">
              <div className="top">
                <img src="imgs/Multi-Banner-3.webp" alt=""></img>
                <img src="imgs/Multi-banner-4.avif" alt=""></img>
              </div>
              <div className="bottom">
                <img src="imgs/Multi-Banner-5.webp" alt=""></img>
              </div>
            </div>
          </div>
        </div>
         <div className="product_type">
          <div className="container">
            <div className="box">
            <div className="header">
            <h2>New Product</h2>
           </div>
           {
            newProduct.map((curElm) =>
            {
              return(
                <>
                <div className="productbox">
                  <div className="img-box">
                      <img src={curElm.imgs} alt=''></img>
                  </div>
                  <div className="detail">
                    <h3>{curElm.Name}</h3>
                    <p>$ {curElm.price}</p>
                    <div className="icon">
                      <button><AiFillEye /></button>
                      <button><AiFillHeart /></button>
                      <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                    </div>
                  </div>
                </div>
                </>
              )
            })
           }
            </div>
            <div className="box">
            <div className="header">
            <h2>Featured Product</h2>
           </div>
           {
            FeaturedProduct.map((curElm) =>
            {
              return(
                <>
                <div className="productbox">
                  <div className="img-box">
                      <img src={curElm.imgs} alt=''></img>
                  </div>
                  <div className="detail">
                    <h3>{curElm.Name}</h3>
                    <p>$ {curElm.price}</p>
                    <div className="icon">
                      <button><AiFillEye /></button>
                      <button><AiFillHeart /></button>
                      <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                    </div>
                  </div>
                </div>
                </>
              )
            })
           }
          </div>
          <div className="box">
            <div className="header">
            <h2>Top Product</h2>
           </div>
           {
            topProduct.map((curElm) =>
            {
              return(
                <>
                <div className="productbox">
                  <div className="img-box">
                      <img src={curElm.imgs} alt=''></img>
                  </div>
                  <div className="detail">
                    <h3>{curElm.Name}</h3>
                    <p>$ {curElm.price}</p>
                    <div className="icon">
                      <button><AiFillEye /></button>
                      <button><AiFillHeart /></button>
                      <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                    </div>
                  </div>
                </div>
                </>
              )
            })
           }
          </div>
          </div>
         </div>
          </div>
          
        </>
    )
} 

export default Home;