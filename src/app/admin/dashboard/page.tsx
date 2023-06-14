'use client'


import AdminNavbar from '@/components/AdminNavbar'
import Tile from '@/components/Tile'
import React from 'react'
import { TilesData } from '@/data/tileData'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { UserType } from '@/types/ReuseTypes'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { get_all_service_category } from '@/services/servicecategory'
import { useDispatch } from 'react-redux'
import { setserviceCategory } from '@/slices/ServiceCatSlice'


export default function Page() {
  const Router = useRouter();
  const queryClient = useQueryClient()
  const dispatch = useDispatch()


  React.useEffect(() => {
    const token = Cookies.get('token')
    const user = Cookies.get('user') as undefined | UserType
    const isNotAdmin = user?.role !== "admin"
    console.log(isNotAdmin)
    if (!isNotAdmin || !token) {
      Router.push('/')
    }
  }, [])



  const { data , isError , isFetched , isLoading } =  useQuery({
    queryKey: ['servicesCategories'],
    queryFn: get_all_service_category,
  })

  console.log(data)

  React.useEffect(() => {
    if (data) {
      dispatch(setserviceCategory(data))
    }
  }, [data])





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
