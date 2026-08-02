import React, { useState } from 'react'
import './Shop.css';
import { AiFillHeart, AiFillEye, AiOutlineClose } from 'react-icons/ai';
const Shop = ({shop, Filter, allcateFilter, addtocart}) => {
    //Toggle Product Detail
    const [showDetail, setshowDetail ] = useState(false)
    // Detail page Data
    const [detail, setDetail] = useState([])
   // showing Detail Box
    const detailpage = (product) =>
    {
        const detaildata =  ([{product}])
        const productdetail = detaildata[0]['product']  
        // console.log(productdetail)
        setDetail(productdetail)  
        setshowDetail(true)
    }
    const closedetail = () =>
    {
        setshowDetail(false)
    }
  return (
    
    <>
    {
        showDetail ?
        <>
        <div className='product_detail'>
          <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
          <div className='container'>
             <div className='img_box'>
                <img src={detail.imgs} alt=''></img>
             </div>
             <div className='info'>
                <h4># {detail.cat}</h4>
                <h2>{detail.Name}</h2>
                <p>There cannot be a developed country or a society of consciousness without reading as It is one of the basic things of life that is.</p>
                <h3> ${detail.price}</h3>
                <button onClick={() => addtocart (detail)}>Add To Cart</button>
             </div>
          </div>
        </div>
        </>
        : null
    }
    <div className='Shop'>
        <h2># Shop Elhoot</h2>
        <p>Home . Shop </p>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h3>All categories</h3>
                    </div>
                    <div className='box'>
                        <ul>
                            <li onClick={() => allcateFilter ()}>#All Product</li>
                            <li onClick={() => Filter ("tv")}># tv</li>
                            <li onClick={() => Filter ("Bag")}># Bag</li>
                            <li onClick={() => Filter ("speaker")}># speaker</li>
                            <li onClick={() => Filter ("electronics")}># electronics</li>
                            <li onClick={() => Filter ("Airpods")}># Airpods</li>
                            <li onClick={() => Filter ("phone")}># phone</li>
                            <li onClick={() => Filter ("laptop")}># laptop</li>
                        </ul>
                    </div>
                </div>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='imgs/hot1.jpg' alt=''></img>
                    </div>
                </div>
            </div>

            <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='imgs/shop_top.webp' alt=''></img>
                    </div>
                </div>
                <div className='product_box'>
                    <h2>shop Product</h2>
                    <div className='product_container'>
                        {
                          shop.map((curElm) => 
                          {
                            return(
                                <>
                                 <div className='box'>
                                    <div className='img_box'>
                                        <img src={curElm.imgs} alt=''></img>
                                        <div className='icon'>
                                       <li><AiFillHeart /></li> 
                                        <li onClick={() => detailpage (curElm)}><AiFillEye /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <h3>{curElm.Name}</h3>
                                        <p>$ {curElm.price}</p>
                                        <button onClick={() => addtocart (curElm)}>Add To Cart</button>
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
    </div>
    </>
  )
}

export default Shop;
