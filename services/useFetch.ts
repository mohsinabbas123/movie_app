import { useEffect, useState } from "react"

const useFetch = <T>(fetchfunction: () => Promise<T>, autoFetch = true) => {

const[data, setData] = useState<T | null>(null);
const[loading, setLoading] = useState(false);
const[error, setError] = useState<Error| null>(null);

const fetchData = async() => {
    try {

        setLoading(true)
        setError(null)

        const result = await fetchfunction();

        setData(result);
        
    } catch (err) {
        // @ts-ignore
      setError(err instanceof Error? err : new Error ('An error ocured' ))
        
    }
    finally{
        setLoading(false)
    }
}

const reset = ()=> {
    setData(null);
    setLoading(false);
    setError(null);
}

useEffect (() => {
    if(autoFetch){
        fetchData();
    }

}, [])

return {data , loading , error , refetch: fetchData, reset }

}

export default useFetch;













































// import { useEffect, useState } from "react";

// const useFetch = <T>(fetchFunction: () => Promise<T> , autoFetch: true) => {

// const [data , setData] = useState<T | null>(null);
// const [loading , setLoading] = useState(false);
// const [error , setError] = useState<Error | null>(null);

// const fetchData = async () => {
// try {
//     setLoading(true);  // API request started.
//     setError(null);  // clear old erros

//     const result = await fetchFunction();  // calls the api and wait for the response

//     setData(result);   // Now store API result inside state.  ex: data = movie list
    
// } catch (err) {
//     // @ts-ignore
//     setError(err instanceof Error ? err : new Error ('An Error is occured'))
    
// }
// finally{
//     setLoading(false);  // Loading must stop
// }

// }

// const reset = () => {
//  setData(null);
//  setLoading(false);
//  setError(null);
// }

// useEffect (() => {
//     if(autoFetch) {
//     fetchData();
//     }
// }, [])

// return {data , loading, error, refetch: fetchData , reset}

// }

// export default useFetch;




















































