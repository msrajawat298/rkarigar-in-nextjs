'use client'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { ServiceCategoryType } from '@/types/ReuseTypes';
import Image from 'next/image';



interface ServiceCategoriesProps {
    serviceCategoryData: ServiceCategoryType[];
}


export default function ServiceCategories({ serviceCategoryData }: ServiceCategoriesProps) {
    const data = serviceCategoryData
    const [thisTableData, setThisTableData] = useState<ServiceCategoryType[] | []>([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState<ServiceCategoryType[] | []>([]);


    useEffect(() => {
        setThisTableData(data)
    }, [data])

    useEffect(() => {
        setFilteredData(thisTableData);
    }, [thisTableData])



    const handleDeleteCategory = (id: string) => {

    }
    const handleUpdateCategory = (id: string) => {

    }

    const columns = [
        {
            name: 'Name',
            selector: (row: ServiceCategoryType) => row?.name,
            sortable: true
        },
        {
            name: 'Image',
            cell: (row: ServiceCategoryType) => <Image priority src={row?.image} alt='No Image Found' className='py-2' width={100} height={100} />
        },
        {
            name: 'Action',
            cell: (row: ServiceCategoryType) => (
                <div className='flex items-start justify-start px-2 h-20'>
                    <button onClick={() => handleDeleteCategory(row?._id)} className=' w-20 py-2 mx-2 text-xs text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600 rounded transition-all duration-700'>Delete</button>
                    <button onClick={() => handleUpdateCategory(row?._id)} className=' w-20 py-2 mx-2 text-xs text-green-600 hover:text-white my-2 hover:bg-green-600 border border-green-600 rounded transition-all duration-700'>update</button>
                </div>
            )
        },
    ];


    useEffect(() => {
        if (search === '') {
            setFilteredData(thisTableData);
        } else {
            setFilteredData(thisTableData?.filter((item) => {
                const itemData = item?.name.toUpperCase();
                const textData = search.toUpperCase();
                return itemData.indexOf(textData) > -1;
            }))
        }


    }, [search, thisTableData])


    return (

        <div className='w-full h-full bg-gray-50 '>
            <DataTable
                className="text-gray-100 px-4 h-full "
                columns={columns}
                data={filteredData}
                pagination
                keyField="_id"
                title={`Service Categories`}
                fixedHeader
                fixedHeaderScrollHeight='500px'
                selectableRows
                selectableRowsHighlight
                persistTableHead
                subHeader
                subHeaderComponent={
                    <input className='w-60 dark:bg-transparent py-2 px-2  outline-none  border-b-2 border-orange-600' type={"search"}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={"Category Name"} />
                }

            />
        </div>
    )
}
