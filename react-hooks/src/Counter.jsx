import { useState } from "react"

const Counter = () =>{
    const [count, setCount] = useState(0)

    const add = () =>{
          setCount(count + 1)  

        
    }
    const subtract = () =>{
        setCount(count - 1)
    }
    return (
        <>
        <div>
            <button onClick={add}>+</button>
            <h1>{count}</h1>
            <button onClick={subtract}>-</button>
        </div>
        </>
    )
}

export default Counter
  