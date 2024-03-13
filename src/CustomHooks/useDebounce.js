import React, { useEffect, useState } from 'react'

function useDebounce([input,delay]) {
    const [value,setValue]=useState("")
    useEffect(()=>{
    const clearTimeout=setTimeout(() => {
            setValue(input)
        }, delay);
        return()=>{
            clearTimeout(clearTimeout)
        }
    } ,[input] 
)
  return value
}

export default useDebounce
