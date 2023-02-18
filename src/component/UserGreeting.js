import React from "react";

const UserGreeting = (props) => {

    // if (props.isLoggedIn) {
    //     return <h1>Welcome {props.userName}</h1>
    // } else {
    //     return <h1>Please logged In</h1>
    // }
    //another way to rendering

    return (
        <div>
            {props.isLoggedIn ? (<h1>Welcome {props.userName}</h1>) : (<h1>Please logged In</h1>)}
        </div>
    )
}

export default UserGreeting;