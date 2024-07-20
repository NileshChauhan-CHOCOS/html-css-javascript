import React, { useState } from "react";
const Button = ()=>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState("nilesh");
    var message = "";
    const handleClickEvent = () => {
        setCount(count + 1);
    }
    const handleChangeNameEvent = (value)=>{
        var ns = document.getElementById("test").value
        if(ns.length <= 15){
            setName(ns);
            document.getElementById("pd").innerHTML = ns.length;
        }
        else{
            document.getElementById("pd").innerHTML = "Length is greater then 15";
        }
    }
    return(
        <>
        <button onClick={handleClickEvent}>you clicked me {count} times</button>
        <button>your have typed {name}</button>
        <label>Name</label><input id = "test" onChange={handleChangeNameEvent}/>
        <p id = "pd">Number of letters : {message}</p>
        </>
    )
}
export default Button;