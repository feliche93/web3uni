import React from 'react'

export default function CardTest({name}) {
    return (
        <div className='w-40 h-40 bg-white flex items-center justify-center  rounded-xl shadow-lg'>
            <h1 className='text-3xl text-center text-blue-600 font-bold'>Hello {name}</h1>
        </div>
    )
}
