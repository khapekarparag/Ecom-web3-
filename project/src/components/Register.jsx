import React, { use, useState } from 'react'

export default function Register() {
    let regObj ={
        firstName :"",
        lastName :"",
        userName : "",
        password : "",
        ConPassword : ""
    }

    let [register, setRegister] = useState(regObj)

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        setRegister({...register,[name]:value})
    }
    async function handleSubmit(e) {
        e.preventDefault()
        if(register.password != register.ConPassword){
            alert("Your Password Is Not Matched")
            setRegister(regObj) 
        }
        else{
            try{
          await fetch(`http://localhost:3000/login`,{
                method : "POST",
                body :JSON.stringify(register),
                headers : {
                    "content-type" : "application/json"
                }
            }) 
            setRegister(regObj)

            alert("REGISTER SUCCESSFULLY")
        }
        catch(err){
            console.log(err);
        }
        }
        
    }


  return (
    <div id='form-grp' method="post" onSubmit={handleSubmit}>
            <form action="" method="post" id='login-form'>
                <label htmlFor="">First Name:- <input type="text" name='firstName' value={register.firstName} onChange={handleChange} /></label><br /><br />
                <label htmlFor="">Last Name :- <input type="text" name="lastName" value={register.lastName} id="" onChange={handleChange} /></label><br /><br />
                <label htmlFor="">Username  :- <input type="text" name="userName" value={register.userName} id="" onChange={handleChange} /></label><br /><br />
                <label htmlFor="">PassWord :- <input type="password" name="password" id="" value={register.password} onChange={handleChange} /></label><br /><br />
                <label htmlFor="">Confirm Password :- <input type="password" name="ConPassword" value={register.ConPassword} id="" onChange={handleChange} /></label><br /><br />
                <input type="submit" value="Register"/>
            </form>
        </div>
  )
}
