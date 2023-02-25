import { useState } from "react"

const Count = () =>{
    //userState(0) = initial state and initail value 0 for count property
    // return current value of state property and method that capable to edit the state property
    const[count, setCount] = useState(0);

    const increment =() =>{
        setCount(count + 5);
    }

    return(
        <div>
            {/* <button onClick={()=> setCount(count + 1)}>Count {count}</button> */}
            <button onClick={increment}>Increment Five {count} </button>
        </div>
    )
}
export default Count;