import React from 'react'

export const Button = ({ text }) => {
  return (
    <button className='space-x-5 p-2 bg-slate-300 justify-between w-[10vh] rounded-full hover:bg-blue-500 hover:text-white shadow-md'>{text}</button>
  )
}
