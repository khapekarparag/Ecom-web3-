
import React, { useContext, useEffect, useState } from 'react'
import { CartProdValueContext } from '../context/CartProdValueContextProvider'
import { AddProdInCartContext } from '../context/AddProdInCartContextProvider'

export default function Kids() {
          let [prod, setProd ] = useState([]) 
            let {cartval, setCartval} = useContext(CartProdValueContext)
              let {cartProd, setCartProd} = useContext(AddProdInCartContext)


    function handleCart(product){
            setCartProd((prev)=>[...prev,product])
            setCartval(function(prev){
                return prev+1
            })
    }



    async function handleChangeCategory(){      
       let data = await fetch(`http://localhost:3000/product?category=kids`)
       let actualData = await data.json()
       setProd(actualData)
    }
    useEffect(()=>{
      handleChangeCategory()
    },[])

  return (
    <div>
          <div id='container'>
            {
                prod.map((el,i)=>{
                    return <div key={i}>
                        <img src={el.image} alt=""/>
                        <h2>{el.name}</h2>
                        <h3>MRP :{el.price}Rs</h3>
                        <h3>{el.category}</h3>
                        <h4>{el.rating}</h4>
                        <button value={el.id} onClick={()=>handleCart(el)}>ADD TO CART</button>
                    </div>
                })
            }
    </div>
    </div>
  )
}
