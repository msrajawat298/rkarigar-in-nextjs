"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { useForm, SubmitHandler, set } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';



interface Inputs {
  name: string,
  email: string,
  password: string,
}

export default function Page() {
  const [loader, setLoader] = useState(false)
  const { register, formState: { errors }, handleSubmit } = useForm<Inputs>({
    criteriaMode: "all"
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    setLoader(true)
    setTimeout(() => {   
      console.log(data)
      setLoader(false)
    }, 3000);
  }

  return (
    <section className=" bg-slate-950 w-full h-screen ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register  your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input {...register("name", { required: true })} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john Doe" />
                {errors.name && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input {...register("email", { required: true })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                {errors.email && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input {...register("password", { required: true })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.password && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
              </div>
              {
                loader ? <button className=" w-full btn btn-neutral text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center "> <span className="loading loading-spinner"></span> Creating Account Hold Tight ! </button> : <button type="submit" className="w-full btn btn-neutral text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign Up</button>
              }

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link href="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}
