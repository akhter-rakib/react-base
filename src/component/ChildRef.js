import React from "react";

const ChildRef = React.forwardRef((props, refs) => {
    return (
        <input type={"text"} ref={refs}/>
    )
})
export default ChildRef;