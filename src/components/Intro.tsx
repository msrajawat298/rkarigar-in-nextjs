import Image from 'next/image'
import React from 'react'

export default function Intro() {
    return (
        <div className='w-full h-full md:px-10 flex items-center text-white  flex-col justify-center relative'>

            <h1 className='md:text-6xl text-2xl my-2 font-semibold text-white/90 '>Clean home, happy life </h1>
            <h1 className='md:text-6xl text-2xl my-2  font-semibold text-white/70 '>Let LocalPro help</h1>
            <button className='btn md:btn-lg md:btn-wide text-xl my-4  dark:text-white'>View Services </button>

        </div>
    )
}
