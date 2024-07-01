import React from "react";

export default function AboutUs(){
    const navigate = useNavigate()
    const handleClick =() => {
        navigate("/home")
    }
    return{
    <>
    <div>Welcome About us</div>
    <button onClick={handleClick}>Home</button>   
     
    }
}