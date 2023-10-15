import React, { useMemo, useState } from 'react'

//A utility function that calculates factorial 
const calculateFactorial = (num)=>{
    console.log("Computing Factorial");
    let result = 1;
    for(let i=2;i<=num;i++){
        result *=i;
    }
    return result
}

export default function UseMemo() {


    const [number,setNumber] = useState(1);
    const [counter,setCounter] = useState(0)

    // const factorial = ()=>{
    //     return calculateFactorial(number)
    // }
    const factorial = useMemo(()=>{
        return calculateFactorial(number)
    },[number])

  return (
    <div>
       <h1>Factorial calculator</h1>
       <input type="number" value={number} onChange={(e)=>{setNumber(Number(e.target.value));}}/>

       <p>Factorial of {number} is {factorial} </p>
       <button onClick={()=>{setCounter(counter+1)}}>Increment Counter</button>
       <p>This component has rendered {counter} times</p>
    </div>
  )
}
