import React, { useContext, useEffect, useState } from 'react'
import { UpdateProdContext } from '../context/UpdateProdContextProvider'
import { useNavigate } from 'react-router-dom'

export default function ShowAdminProducts() {
    let navigate = useNavigate()
        let {updateProd, setUpdateProd} = useContext(UpdateProdContext)
        let [prod, setProd ] = useState([]) 
    
    async function handleShow(){
            let data = await fetch(`http://localhost:3000/product`)
            let actualData = await data.json()
            setProd(actualData) 
        }
        useEffect(()=>{
            handleShow()
        },[])
    

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

    async function handleUpdate(e){
        let value = e.target.value
        let data = await fetch(`http://localhost:3000/product/${value}`)
        let actualData = await data.json()
        setUpdateProd(actualData)
        navigate("/update")
    }

    async function handleDelete(e) {
        let val = e.target.value
        await fetch(`http://localhost:3000/product/${val}`,{
            method : "DELETE"
        })
        setProd(prod.filter((el)=>{
           return el.id != val
        }))
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
                        <button value={el.id} onClick={handleUpdate}>UPDATE</button>
                        <span> ||||||||||  </span>
                        <button value={el.id} onClick={handleDelete}>DELETE</button>
                    </div>
                })
            }
    </div>
    </>
  )
}
