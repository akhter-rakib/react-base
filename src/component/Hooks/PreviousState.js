import { useState } from "react"


const PreviousState = () => {

    const initialvalue = 0;
    const [count, setCount] = useState(initialvalue);
    
    const incrementWithFive = () =>{
        for(let i = 0; i <= 5; i++){
            setCount(count + i);
        }
    }
    return(
        <div>
            Count {count}
            <br/>
            <button onClick={()=> setCount(count + 1)}>increment by 1 </button>
            <button onClick={()=> setCount(count - 1)}>decrement by 1 </button>
            <button onClick={incrementWithFive}>decrement by 5 </button>

            <button onClick={()=> setCount(preViousCount => preViousCount + 5)}>increment by 5 </button>
        </div>
    )
}

export default PreviousState;