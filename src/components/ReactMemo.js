import React, { useState } from 'react'
import Todos from './Todos';

export default function ReactMemo() {
    const [count,setCount]  = useState(0);
    const [todos,setTodos] = useState(['Todo1','Todo2'])
    const [name,setName] = useState('arjit')

    const increment = ()=>{
        // setCount(count+1);
        setCount((c)=> c+1)
    }
  return (
    <div>
        <Todos todos={todos} name={name}/>
        <button onClick={()=>{setName("ARjit Verma")}}>Change Name</button>
        <hr/>
        <div>
            Count :{count}
            <button onClick={increment}>+</button>
        </div>
    </div>
  )
}
