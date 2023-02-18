import React from 'react'

const Greet = ({ fname, lname }) => {//if you have multiple line then use {}
    return (// if you have multiple line in return statement then use ()
        <div>
            <h1> Hello your first Name is = {fname}! and last name {lname} </h1>
        </div>
    )
}

export default Greet;