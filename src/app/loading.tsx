"use client"
import React from 'react'
import { TailSpin } from 'react-loader-spinner'

export default function Loading() {
    return (
        <div className='w-full h-screen flex items-center justify-center flex-col'>
            <TailSpin
                height="80"
                width="80"
                color="#330099"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

            <h1 className='py-2 my-2 text-sm font-semibold text-indigo-600'>Loading Hold tight ! ....</h1>
        </div>
    )
}
