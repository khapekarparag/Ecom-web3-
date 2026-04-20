import React, { useContext, useState } from 'react'
import { UpdateProdContext } from '../context/UpdateProdContextProvider'
import { useNavigate } from 'react-router-dom'
export default function UpdateProduct() {
    const navigate = useNavigate()
    let {updateProd, setUpdateProd} = useContext(UpdateProdContext)

    function handleChange(e){
        let name = e.target.name
        let value= e.target.value
            setUpdateProd({...updateProd,[name]:value})
            console.log(updateProd);
            
    }

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:3000/product/${updateProd.id}`,{
            method : "PUT",
            headers :{
                'content-type' : "application/json"
            },
            body:JSON.stringify(updateProd) 
        })
        navigate('/showadminprod')
    }


  return (
    <div id='form-grp'>
        <form action="" method="post" onSubmit={handleSubmit}>
            <label htmlFor="">Image : <input value={updateProd.image} type="url" name="image" id="" onChange={handleChange} /></label><br /><br />
            <label htmlFor="">Name : <input value={updateProd.name} type="text" name="name" id="" onChange={handleChange}/></label><br /><br />
            <label htmlFor="">Category : <select value={updateProd.category} name="category" id="" onChange={handleChange}>
                                                <option value="mens">Mens</option>
                                                <option value="womens">Womens</option>
                                                <option value="kids">Kids</option>
                                                <option value="other">Other</option>
                                        </select></label><br /><br />
            <label htmlFor="">Discription : <input value={updateProd.discription} type="text" name="discription" id="" onChange={handleChange} /></label><br /><br />
            <label htmlFor="">Price : <input value={updateProd.price} type="number" name="price" id="" onChange={handleChange} /></label><br /><br />
            <label htmlFor="">Rating : <input value={updateProd.rating} type="text" name="rating" id="" onChange={handleChange} /></label><br /><br />

            <input type="submit" value="submit" />
        </form>
    </div>
  )
}
