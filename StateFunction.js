import {useState} from "react"
export default function StateFunction()
{
    const[carName,setCarName]=useState("Audi");
    const changeCarName=()=>setCarName("Benz")

const[count,setCount]=useState(0);
const changeCount=()=>setCount(count+10)
const decrCount=()=>setCount(count-1)
    return(
        <div>
            <h1>My Car Name is {carName}</h1>
            <button onClick={changeCarName}>click me</button>
            <h1>Count {count}</h1>
            <button onClick={changeCount}>Increment</button>
            <button onClick={decrCount}>Decrement</button>
        </div>

    )
}