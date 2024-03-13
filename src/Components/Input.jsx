import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'

function Input({type,maxLength=256,placeholder='',required=false,stateAtom}) {
    const [value,setValue]=useRecoilState(stateAtom)
    const handleChange=useCallback((e)=>{
        setValue(e.target.value)
    },[setValue])
  return (
    <input value={value} onChange={handleChange} type={type} className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]" maxLength={maxLength} name="name" placeholder={placeholder} required={required} />
  )
}

export default Input
