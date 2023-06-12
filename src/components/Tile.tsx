import React from 'react'
import { MdCategory , MdPendingActions } from 'react-icons/md'
import { FcServices } from 'react-icons/fc'
import { GrCompliance } from 'react-icons/gr'
import Link from 'next/link'


interface Props {
    icon: any;
    title: string;
    path: string;
}


export default function Tile({ icon, title, path} : Props) {
  return (
    <Link href={`${path}`} className='w-96   h-40 m-4 bg-gray-50 text-black  flex-col rounded flex items-center justify-center '>
        {icon === 'MdCategory' && <MdCategory className='w-20 h-20 text-gray-900' />}
        {icon === 'FcServices' && <FcServices className='w-20 h-20 text-gray-900' />}
        {icon === 'GrCompliance' && <GrCompliance className='w-20 h-20 text-gray-900' />}
        {icon === 'MdPendingActions' && <MdPendingActions className='w-20 h-20 text-gray-900' />}
        <p className='my-2 text-lg tracking-widest font-semibold'>{title}</p>
    </Link>
  )
}
