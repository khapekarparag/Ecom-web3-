import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserLoginContext } from '../context/UserLoginContextProvider'
export default function Login() {
    let {user, setUser} = useContext(UserLoginContext)
    let logObj ={
        username:"",
        password : ""
    }
let [log, setLogin] = useState(logObj)
        function handleChange(e){
            let name = e.target.name
            let value = e.target.value
            setLogin({...log,[name]:value})
        }

       async function handleSubmit(e){
        e.preventDefault()
        let data = await fetch(`http://localhost:3000/login`)
        let actualData = await data.json()
            let isValid = false
            for(let i=0; i<=actualData.length-1;i++){
                if(actualData[i].userName == log.username && actualData[i].password == log.password){
                        isValid = true
                         break
                    }
                }
            if(isValid){
                setUser(true)
                alert("login Successfull")
            }
            else{
                alert("may be your username or password is incorrect")
                    }     
        }

  return (
    <div id='form-grp'>
        <form action="" method="post" id='login-form' onSubmit={handleSubmit}>
            <label htmlFor="">Username  :- <input type="text" name="username" id="" onChange={handleChange} /></label><br /><br />
            <label htmlFor="">PassWord :- <input type="password" name="password" id="" onChange={handleChange} /></label><br /><br />
            <input type="submit" value="Login"/>
                <p>if not registerd </p>
                <Link to="/register">Register</Link>
                <Link to="/admin">Admin</Link>
        </form>
    </div>
  )
}
