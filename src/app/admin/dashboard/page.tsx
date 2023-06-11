'use client'

import AdminNavbar from '@/components/AdminNavbar'
import Tile from '@/components/Tile'
import React from 'react'
import { TilesData } from '@/data/tileData'
import Cookies from 'js-cookie'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { UserType } from '@/types/ReuseTypes'


export default function Page() {
  const Router = useRouter();


  React.useEffect(() => {
    const token = Cookies.get('token')
    const user = Cookies.get('user') as undefined | UserType
    const isNotAdmin = user?.role !== "admin"
    console.log(isNotAdmin)
    if (!isNotAdmin || !token) {
      Router.push('/')
    }
  }, [])

  return (
    <div className='w-full  md:h-screen bg-slate-950 text-white flex items-center justify-center'>
      <AdminNavbar />
      <div className='w-11/12 h-5/6 py-16  flex items-center justify-around flex-wrap'>
        {
          TilesData?.map((tile, index) => {
            return (
              <Tile key={index} icon={tile.icons} title={tile.name} path={tile.path} />
            )
          })
        }
      </div>
    </div>
  )
}
