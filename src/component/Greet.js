import React from 'react'

const Greet = (props) => {//if you have multiple line then use {}
    return (// if you have multiple line in return statement then use ()
        <div>
            <h1> Hello {props.name}! </h1>
            {props.children}
        </div>
    )
}

export default Greet;