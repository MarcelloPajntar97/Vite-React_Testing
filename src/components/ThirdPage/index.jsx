import './index.css'

import { useState, useEffect } from 'react'

const ThirdPage = () => {
    const [count, setCount] = useState(0)
    console.log('out');
    useEffect(() => {
        const savedCount = parseInt(localStorage.getItem('count') ?? 0)
        console.log(savedCount);
        setCount(savedCount)
    }, [])

    useEffect(() => {
        console.log('render');
      localStorage.setItem('count', count)
    }, [count])
    // no array function called everytime
    // empty array call only on first render
    // array full call whne variable change
    
    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>increment</button>
            <h2>{count}</h2>
        </>
    )
}

export default ThirdPage