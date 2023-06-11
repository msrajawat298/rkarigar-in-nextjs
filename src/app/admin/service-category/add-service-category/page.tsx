"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { MdAdd } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { add_service_category } from '@/services/servicecategory'
import { storage } from '@/utils/connectorFire'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Cookies from 'js-cookie'


type Inputs = {
    name: string,
    description: string,
    image: Array<File>,
}



interface loaderType {
    loader: Boolean
}



const uploadImages = async (file: File) => {
    const createFileName = () => {
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 8);
        return `${file?.name}-${timestamp}-${randomString}`;
    }

    const fileName = createFileName();
    const storageRef = ref(storage, `ecommerce/category/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on('state_changed', (snapshot) => {
        }, (error) => {
            console.log(error)
            reject(error);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
            }).catch((error) => {
                console.log(error)
                reject(error);
            });
        });
    });
}


const maxSize = (value: File) => {
    const fileSize = value.size / 1024 / 1024;
    return fileSize < 1 ? false : true
}


export default function Page() {
    const [loader, setLoader] = useState(false)
    const Router = useRouter();


    useEffect(() => {
        Cookies.get('token') === undefined && Router.push('/admin/login')
    }, [])



    const { register, formState: { errors }, handleSubmit } = useForm<Inputs>({
        criteriaMode: "all"
    });


    const onSubmit: SubmitHandler<Inputs> = async data => {
        setLoader(true)

        const CheckFileSize = maxSize(data.image[0]);

        if (CheckFileSize) return toast.error('Image size must be less then 1MB')

        const uploadImageToFirebase = await uploadImages(data.image[0]);

        const dataToSend = { name: data.name, description: data.description, image: uploadImageToFirebase }

        const res = await add_service_category(dataToSend);

        if (res?.success) {

            toast.success(res?.message)

            setTimeout(() => {
                Router.push('/admin/service-category')
            }, 2000);

            setLoader(false)

        }
        else {

            toast.error(res?.message)

            setLoader(false)

        }


        setLoader(false)
    }


    return (
        <div className='w-full h-screen text-white bg-slate-950  flex items-center  flex-col'>

            <div className="text-sm w-full text-white py-3 px-2 border-b-white border-b breadcrumbs">
                <ul>
                    <li>
                        <Link href='/admin/dashboard'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <MdAdd className="w-4 h-4 mr-2 stroke-current" />
                        Add Document
                    </li>
                </ul>
            </div>
            <div className='w-full h-20 my-2 text-center'>
                <h1 className='text-2xl py-2 dark:text-black'>Add Category</h1>
            </div>
            <div className='w-full px-4 h-full flex items-start justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg  py-2 flex-col ">
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text text-white">Category Name</span>
                        </label >
                        <input {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered text-black w-full" />
                        {errors.name && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                    </div >
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text text-white">Category Description</span>
                        </label>
                        <textarea  {...register("description", { required: true })} className="textarea textarea-bordered text-black h-24" placeholder="Description"></textarea>
                        {errors.description && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

                    </div>
                    <div className="form-control w-full mb-2 ">
                        <label className="label">
                            <span className="label-text text-white">Add Category Image</span>
                        </label>
                        <input accept="image/*" max="1000000"  {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full text-black" />
                        {errors.image && <span className='text-red-500 text-xs mt-2'>This field is required and the image must be less than or equal to 1MB.</span>}

                    </div>

                    {
                        loader ? <button className=" w-full btn  font-medium rounded-lg mt-4 text-sm px-5 py-2.5 text-center "> <span className="loading loading-spinner"></span>Adding Catgeory ! </button> : <button type="submit" className="w-full btn  mt-4 font-semibold  rounded-lg text-sm px-5 py-2.5 text-center ">Add Category</button>
                    }

                </form >
            </div>
            <ToastContainer />
        </div>
    )
}
