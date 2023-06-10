'use client'
import React from 'react'
import DataTable from 'react-data-table-component'


export default function ServiceCategories() {



    const columns = [
        {
            name: 'Title',
            selector: (row: any) => row.title,
        },
        {
            name: 'Year',
            selector: (row: any) => row.year,
        },
    ];

    const data  = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]


    return (
        <div className='w-full h-full bg-gray-50 '>
            <DataTable
                 className="text-gray-100 px-4 h-full "
                columns={columns}
                data={data}
                pagination
                keyField="id"
                title={`Service Categories`}
                fixedHeader
                fixedHeaderScrollHeight='500px'
                selectableRows
                selectableRowsHighlight
                persistTableHead
                subHeader
            />
        </div>
    )
}
