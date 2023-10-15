import React, { useCallback, useState } from 'react'

const ChildComponent = React.memo(({action})=>{
  console.log("Child component is rerendering");
  return (
    <button onClick={action}>Click Me</button>
  )
})


export default function UseCallback() {
  const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(c => c + 1);
  // };
  const increment = useCallback(()=>{
    setCount(c => c + 1);
  },[])
  return (
    <div>
      <p>Count : {count}</p>
      <ChildComponent action={increment}/>
    </div>
  )
}


//useMemo => to remember values
//React.memo => for components - to not rerender a child component until props have changed
//useCallback - to remember functions