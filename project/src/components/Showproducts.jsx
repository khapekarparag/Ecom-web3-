import React, { useEffect, useState } from 'react'
import '../style/showProduct.css'
import { useContext } from 'react'

import { CartProdValueContext } from '../context/CartProdValueContextProvider'
import { AddProdInCartContext } from '../context/AddProdInCartContextProvider'
import { SearchContext } from '../context/SearchContextProvider'
import { ThemeContext } from '../context/ThemeContextProvider'

export default function Showproducts() {
    let [prod, setProd ] = useState([])  
    let {cartval, setCartval} = useContext(CartProdValueContext)
    let {cartProd, setCartProd} = useContext(AddProdInCartContext)
    let {search, setSearch} = useContext(SearchContext)
    let {theme, setTheme} = useContext(ThemeContext)



    async function handlebySearch(){
        console.log(search);
        
            let data = await fetch(`http://localhost:3000/product?category=${search}`)
            let actualData = await data.json()
            setProd(actualData)
    }   
   useEffect(()=>{
        handlebySearch()
    },[search])
 

    async function handleShow(){
        let data = await fetch(`http://localhost:3000/product`)
        let actualData = await data.json()
        setProd(actualData) 
    }
    useEffect(()=>{
        handleShow()
    },[])

    function handleCart(product){
        let exist = false

        let updateCart = cartProd.map((el)=>{
            if(el.id == product.id){
                exist =true
                return {...el,quantity : el.quantity +1 }
            }
            return el
        })
        if(!exist){
            setCartProd((prev)=>{
                return[...prev,{...product, quantity:1}]
            })
        }
        else{
            setCartProd(updateCart)
        }
        setCartval((prev)=>{
            return prev + 1       
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
        <div style={{backgroundColor : theme ? '#1f1e1e' : 'white'}} >
        <div className='filterProduct' style={{backgroundColor : theme ? '#1f1e1e' : 'white'}}>
            <nav style={{backgroundColor : theme ? '#1f1e1e' : 'white'}}>
                <select name="category" id="" onChange={handleChangeCategory}>
                    <option value="">Select option</option>
                    <option value="mens">Mens</option>
                    <option value="womens">Womens</option>
                    <option value="kids">Kids</option>
                </select>
                <button onClick={handleAllProduct}>All Products</button>
            </nav>
        </div>


        <div id='container' style={{backgroundColor : theme ? '#1f1e1e' : 'white'}}>
            {
                prod.map((el,i)=>{
                    return <div key={i} style={{backgroundColor : theme ? '#3a3838' : 'white'}}>
                        <img src={el.image} alt=""/>
                        <h2>{el.name}</h2>
                        <h3>MRP :{el.price}Rs</h3>
                        <h3 style={{color : theme ? '#b6abab' : '#3a3838'}}>{el.category}</h3>
                        <h4>{el.rating}</h4>
                        <button value={el.id} onClick={()=>handleCart(el)}>ADD TO CART</button>
                    </div>
                })
            }
    </div>
</div>

    
  )
}
