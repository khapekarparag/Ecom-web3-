import React, { useState } from 'react'
import '../style/showProduct.css'
export default function Showproducts() {
    let [prod, setProd ] = useState([])
   async function handleShow(){
        let data = await fetch(`http://localhost:3000/product`)
        let actualData = await data.json()
        setProd(actualData) 
    }
    handleShow()
  return (
    <div id='container'>
            {
                prod.map((el,i)=>{
                    return <div key={i}>
                        <img src={el.image} alt=""/>
                        <h2>{el.name}</h2>
                        <h3>MRP :{el.price}Rs</h3>
                        <h3>{el.category}</h3>
                        <h4>{el.rating}</h4>
                        <button>ADD TO CART</button>
                    </div>
                })
            }
    </div>
  )
}
