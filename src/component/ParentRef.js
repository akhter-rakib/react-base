import React from "react";
import ChildRef from "./ChildRef";
import {useRef, useEffect} from "react";
import userEvent from "@testing-library/user-event";

const ParentRef = () => {

    const inputRefs = useRef(null);
    const passTheRef = () => {
        if (inputRefs.current) {
            inputRefs.current.focus();
        }
    }
    // useEffect (() =>{
    //     if(inputRefs.current){
    //         inputRefs.current.focus();
    //     }
    //  }
    // )
    return (
        <>
            <ChildRef ref={inputRefs}/>
            <button onClick={passTheRef}>click me</button>
        </>
    )
}
export default ParentRef;