import React from "react";
import { useRef } from "react";
import {useEffect} from "react";

const Refs = () =>{

    const inputRef = useRef(null);
  
    useEffect(() =>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    });

    return(
        <div>
            <label>Name : </label>
            <input type={Text} ref={inputRef} />
        </div>
    )
}

export default Refs;