import { useEffect } from 'react';
import {useGetPokemonByNameQuery} from './redux/createApi'
function App() {
  const {data,isLoading,isError} = useGetPokemonByNameQuery('bulbasaur')

  useEffect(()=>{
    console.log("Data",data)
  },[data])

  return (
  <></>
  );
}

export default App;
//memoize - remembering something.
