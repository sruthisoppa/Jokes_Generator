import React from "react";
import './Button.css';
const Button = (props) =>{
    return <button className="custom-button" onClick = {props.callApi}>
        Click to generate a joke</button>;
}
console.log("Button component rendered");

export default Button;