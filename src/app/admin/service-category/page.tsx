import React from 'react'
import Link from 'next/link'
import { MdCategory } from 'react-icons/Md'
import ServiceCategories from '@/components/ServiceCategories'

export default function Page() {
    return (
        <div className='w-full h-screen bg-slate-950  flex items-center  flex-col'>

            <div className="text-sm w-full text-white py-3 px-2 border-b-indigo-600 border-b breadcrumbs">
                <ul>
                    <li>
                        <Link href='/admin/dashboard'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <MdCategory className="w-4 h-4 mr-2 stroke-current" />
                        Add Document
                    </li>
                </ul>
            </div>
            <div className='w-full py-3 px-4 flex items-center justify-end'>
                <button className='btn btn-primary'>Add Service Category</button>
            </div>
            <div className='w-10/12  h-4/6 '>
                <ServiceCategories />
            </div>
        </div>
    )
}
