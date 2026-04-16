import React, { useState } from 'react'

export default function Products() {
    let prodData = {
        image : "",
        name : "",
        category : "",
        discription : "",
        price : "",
        rating : ""
    }
    let [prod, setProd] = useState(prodData)


    function handleChange(e){
        let name = e.target.name
        let value = e.target.value

        setProd({...prod,[name]:value})
        console.log(prod);
        
    }

   async function handleSubmit(e){
    e.preventDefault()
                await fetch(`http://localhost:3000/product`,{
                    method : "POST",
                    body :JSON.stringify(prod),
                    headers : {
                        "content-type" : "application/json"
                    }
                })
                setProd(prodData)
    }

  return (
    <div>
        <form action="" method="post" onSubmit={handleSubmit}>
            <label htmlFor="">Image : <input type="url" name="image" id="" onChange={handleChange} /></label><br /><br />
            <label htmlFor="">Name : <input type="text" name="name" id="" onChange={handleChange}/></label><br /><br />
            <label htmlFor="">Category : <select name="category" id="" onChange={handleChange}>
                                                <option value="mens">Mens</option>
                                                <option value="womens">Womens</option>
                                                <option value="kids">Kids</option>
                                                <option value="other">Other</option>
                                        </select></label><br /><br />
            <label htmlFor="">Discription : <input type="text" name="discription" id="" onChange={handleChange} /></label><br /><br />
            <label htmlFor="">Price : <input type="number" name="price" id="" onChange={handleChange} /></label><br /><br />
            <label htmlFor="">Rating ; <input type="text" name="rating" id="" onChange={handleChange} /></label><br /><br />

            <input type="submit" value="submit" />
        </form>
    </div>
  )
}
