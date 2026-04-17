import React, { useEffect, useState } from 'react'
import '../style/showProduct.css'
import { useContext } from 'react'
import { CartProdValueContext } from '../context/CartProdValueContextProvider'
import { AddProdInCartContext } from '../context/AddProdInCartContextProvider'
export default function Showproducts() {
    let [prod, setProd ] = useState([]) 
    let {cartval, setCartval} = useContext(CartProdValueContext)
    let {cartProd, setCartProd} = useContext(AddProdInCartContext)


    async function handleShow(){
        let data = await fetch(`http://localhost:3000/product`)
        let actualData = await data.json()
        setProd(actualData) 
    }
    useEffect(()=>{
        handleShow()
    },[])

    function handleCart(product){
            setCartProd((prev)=>[...prev,product])
            setCartval(function(prev){
                return prev+1
            })
    }

    async function handleAllProduct(){
        let data = await fetch(`http://localhost:3000/product`)
        let actualData = await data.json()
        setProd(actualData) 
    }

    async function handleChangeCategory(e){
        let value = e.target.value
       let data = await fetch(`http://localhost:3000/product?category=${value}`)
       let actualData = await data.json()
       setProd(actualData)
    }

  return (
<>
        <div className='filterProduct'>
            <nav>
                <select name="category" id="" onChange={handleChangeCategory}>
                    <option value="">Select option</option>
                    <option value="mens">Mens</option>
                    <option value="womens">Womens</option>
                    <option value="kids">Kids</option>
                </select>
                <button onClick={handleAllProduct}>All Products</button>
            </nav>
        </div>


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
</>

    
  )
}
