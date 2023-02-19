import React from "react";
import './mystyle.css'

const StyleSheet = (props) => {

    let className = props.primary ? 'primary' : '';
    return (
        <h1 className={`${className} font-xl`} > I am CSS Color</h1>
    )
}

export default StyleSheet;