import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContextProvider'


export default function Admin() {
    let {admin, setAdmin} = useContext(AdminContext)
     let logObj ={
            username:"",
            password : ""
        }
    let [log, setLogin] = useState(logObj)
            function handleChange(e){
                let name = e.target.name
                let value = e.target.value
                setLogin({...log,[name]:value})
                console.log(name,value);
                
            }
    
           async function handleSubmit(e){
            e.preventDefault()
            let data = await fetch(`http://localhost:3000/admin`)
            let actualData = await data.json()

            // actualData.filter((el)=>{
            //     console.log(el.userName);
            //     console.log(log.username);
                
            //             if(el.userName == log.username && el.password == log.password){
            //              setAdmin(true)
            //               console.log("successfully Login")
            //                 }
            //              else{
            //             alert("may be your username or password is incorrect")
            //              }   
            // }) 

              let isValid = false
            for(let i=0; i<=actualData.length-1;i++){
                if(actualData[i].userName == log.username && actualData[i].password == log.password){
                    isValid = true
                    break
                }
            }
            if (isValid){
                setAdmin(true)
                alert("Login Successfull")
            }
            else{
                alert("may be your username or password is incorrec")
            }
            }
          
                 
    
            

  return (
    <div id='form-grp'>
        <form action="" method="post" id='login-form' onSubmit={handleSubmit}>
            <label htmlFor="">Username  :- <input type="text" name="username" id="" onChange={handleChange} /></label><br /><br />
            <label htmlFor="">Password :- <input type="password" name="password" id="" onChange={handleChange} /></label><br /><br />
            <input  type="submit" value="Admin Login"/>

            <h1>For authorized Person</h1>
        </form>
    </div>
  )
}
