import React, { memo } from 'react'

function Todos({todos,name}) {
    console.log("Child Render")
  return (
    <div>

        <h2>My Todos for {name}</h2>
        {todos.map((todo,index)=>{
            return <p key={index}>{todo}</p>
        })}
    </div>
  )
}

export default memo(Todos)