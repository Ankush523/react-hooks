import React, { useEffect, useState } from 'react'

const UseEffectCleanup = () => {
    const [size,setSize] = useState(window.innerWidth)
    const checkSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('resize',checkSize)
        return () => {
            console.log('cleanup')
            window.removeEventListener('resize',checkSize)
        }
    },[])
    
    console.log('render')

  return (
    <div>
        <h1>Window</h1>
        <h2>{size} px</h2>
    </div>
  )
}

export default UseEffectCleanup