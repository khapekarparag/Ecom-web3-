import React, { useContext, useState } from 'react'

import { CartProdValueContext } from '../context/CartProdValueContextProvider'
import { AddProdInCartContext } from '../context/AddProdInCartContextProvider'


export default function Cart() {
    let {cartval, setCartval} = useContext(CartProdValueContext)
    let {cartProd, setCartProd} = useContext(AddProdInCartContext)
    // let {count, IncCount} = useState(0)




  return (
    <div>
        CART{cartval}
        <table border={1}>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Total Item</th>
                </tr>
            </thead>
            <tbody > 
        {
           cartProd.map((el,i)=>{
            
                 {return <tr key={i}> 
                        <td>{el.name}</td>
                        <td>{el.price}Rs</td>
                        <td>{el.category}</td>
                        {/* <td>{val}</td> */}
                    </tr>}
            })
        }
             </tbody>
            </table>

    </div>
  )
}
