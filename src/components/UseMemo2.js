
import { format } from 'date-fns';
import React, { useEffect, useMemo, useState } from 'react'

export default function UseMemo2() {
    const [selectedNum,setSelectedNum] = useState(100);
 // We calculate all of the prime numbers between 0 and the
  // user's chosen number, `selectedNum`:
  
  const time = useTime()



  const allPrimes  = useMemo(()=>{
    const result = [];
    for(let counter =2; counter < selectedNum;counter++){
        if(isPrime(counter)){
            result.push(counter)
        }
      }

      return result
  },[selectedNum])

  return (
    <div>
        <p>
            {format(time,'hh:mm:ss')}
        </p>
        <form>
        <input type="number" value={selectedNum} onChange={(event)=>{
            // To prevent computers from exploding,
            // we'll max out at 100k
            let num = Math.min(100000, Number(event.target.value));
            setSelectedNum(num)
        }} />
        </form>
        <p>
            There are {allPrimes.length} prime(s) between 1 and {selectedNum}
             {' '}
             <span>
                {allPrimes.join(',')}
             </span>
        </p>
    </div>
  )
}
// Helper function that calculates whether a given
// number is prime or not.

function isPrime(n){
    console.log("Function is executed")
    const max = Math.ceil(Math.sqrt(n));

    if(n===2){
        return true
    }

    for(let counter = 2; counter <= max ; counter++){
        if(n% counter === 0){
            return false
        }
    }
    return true
}

function useTime(){
    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = window.setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{
            window.clearInterval(intervalId)
        }
    },[])

    return time;
}
