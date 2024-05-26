import React from 'react'

const Categories = () => {
    return (
        <div className=''>
            <div className='w-[80%] mx-auto'>
                <hr className='' />
            </div>
            <div className='mt-4 flex justify-center'>
                <button className='border border-black border-3 rounded-md ml-2 p-2 hover:text-white hover:border-none cursor-pointer hover:bg-indigo-500'>All</button>
                <button className='border border-black border-1 rounded-md ml-2 p-2 hover:text-white hover:border-none cursor-pointer hover:bg-indigo-500'>Mens</button>
                <button className='border border-black border-1 rounded-md ml-2 p-2 hover:text-white hover:border-none cursor-pointer hover:bg-indigo-500'>Womens</button>
                <button className='border border-black border-1 rounded-md ml-2 p-2 hover:text-white hover:border-none cursor-pointer hover:bg-indigo-500'>Jewellery</button>
                <button className='border border-black border-1 rounded-md ml-2 p-2 hover:text-white hover:border-none cursor-pointer hover:bg-indigo-500'>Electronics</button>
            </div>
        </div>
    )
}

export default Categories