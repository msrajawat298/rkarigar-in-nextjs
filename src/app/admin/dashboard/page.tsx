import AdminNavbar from '@/components/AdminNavbar'
import Tile from '@/components/Tile'
import React from 'react'
import { TilesData } from '@/data/tileData'

export default function Page() {
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
