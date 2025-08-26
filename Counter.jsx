import { useState } from "react";
function Counter(){
    const [count, setCount] = useState(0)
    return(
        <>
        <h1>Counter: {count}</h1>
        <button onClick={()=> setCount(count+1)}>ADD</button>
        <button onClick={()=> setCount(count-1)}>SUB</button>
        <button onClick={()=> setCount(0)}>Reset</button>
        </>
    )
}
export default Counter  