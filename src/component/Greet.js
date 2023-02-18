import React from 'react'

const Greet = (props) => {//if you have multiple line then use {}
    const {fname, lname} = props;
    return (// if you have multiple line in return statement then use ()
        <div>
            <h1> Hello your first Name is = {fname}! and last name {lname} </h1>
        </div>
    )
}

export default Greet;