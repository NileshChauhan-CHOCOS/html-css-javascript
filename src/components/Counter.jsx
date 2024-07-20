import React,{useState} from "react";
import "./Counter.css";
const Counter = ()=>{
    const [count, setCount] = useState(0);
    const handleIncrClick = ()=>{
        setCount(count + 1);
    }
    const handleDecClick = ()=>{
        setCount(count - 1);
    }
    const handleReset = () =>{
        setCount(0);
    }
    return(
        <>
        <div style={{
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            justifyContent : "center",
            fontFamily : '"Ubuntu", sans-serif',
            fontSize :"300%",
            fontWeight : "900%",
            position : "absolute",
            width : "100%",
            height : "100%",
            top : "-15%",
            color : "white"
        }}>
            <h1 data-text="Counter App">Counter App</h1>
            <div style={{
                fontSize : "120%",
                position : "relative",
                top : "10vh",
                color :"rgb(5, 100, 119)"
            }}>
                {count}
            </div>
            <div className="buttons">
                <button
                    style={{
                        fontFamily : '"Ubuntu", sans-serif',
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginRight: "5px",
                        backgroundColor: "green",
                        borderRadius: "4%",
                        color: "white",
                        padding : "12px",
                        border :"none",
                        cursor: "pointer"
                    }}
                    onClick={handleIncrClick}
                >
                    Increment
                </button>
                <button
                    style={{
                        fontFamily : '"Ubuntu", sans-serif',
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "50px",
                        backgroundColor: " rgb(68, 19, 68)",
                        borderRadius: "4%",
                        color: "white",
                        padding : "12px",
                        border : "none",
                        cursor: "pointer"
                    }}
                    onClick={handleDecClick}
                >
                    Decrement
                </button>
                <button
                    style={{
                        fontFamily : '"Ubuntu", sans-serif',
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "50px",
                        backgroundColor: " rgb(30, 19, 68)",
                        borderRadius: "4%",
                        color: "white",
                        padding : "12px",
                        border : "none",
                        cursor: "pointer"
                    }}
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
        </>
    );
}
export default Counter;