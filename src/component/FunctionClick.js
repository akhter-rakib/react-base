import React from "react";

const FunctionClick = () => {

    const clickMe = () => {
        console.log("I am clicked by you")
    }

    return (
        //event handler is a function not function call so that it is not used () in the onclick method
        <button onClick={clickMe}>Click Me</button>
    );
}

export default FunctionClick;
