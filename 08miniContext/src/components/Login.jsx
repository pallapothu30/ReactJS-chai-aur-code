import React from "react";
import { useState,useContext } from "react";
import UserContext from "../context/UserContext";

function Login(){
    const[username,setUserName] = useState();
    const[password,setPassword] = useState();

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})  
    }

    const {setUser} = useContext(UserContext);
    
    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            value = {username}
            onChange={(e)=>setUserName(e.target.value)}
            placeholder="usename"/>
            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;