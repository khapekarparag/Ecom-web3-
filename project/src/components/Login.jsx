import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Login() {

let [login, setLogin] = useState()


  return (
    <div id='form-grp'>
        <form action="" method="post" id='login-form'>
            <label htmlFor="">Username  :- <input type="text" name="uname" id="" /></label><br /><br />
            <label htmlFor="">PassWord :- <input type="password" name="password" id="" /></label><br /><br />
            <input type="submit" value="Login"/>
                <p>if not registerd </p>
                <Link to="/register">Register</Link>
        </form>
    </div>
  )
}
