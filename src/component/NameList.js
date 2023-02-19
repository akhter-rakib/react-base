import React from "react";



const NameList = (props) => {
    return (
        props.list.map((person, index) => {
            return <p>ID : {person.id} - Name : {person.name} and index no : - {index}</p>
        })
    )
}


export default NameList;