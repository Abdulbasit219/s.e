import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const getAllCategories = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products/categories');
            if (data) {
                setCategories(data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <div className=''>
            <div className='w-[80%] mx-auto'>
                <hr className='' />
            </div>
            <div className='mt-4 flex justify-center'>

                <Link to={'/'}>
                    <button className='border border-black border-3 rounded-md ml-2 p-2 hover:text-white hover:border-none cursor-pointer hover:bg-indigo-500'>All</button>
                </Link>

                {categories.map(category => (
                    <div key={category}>
                        <Link to={`/categories/${category}`}>
                            <button className='border border-black border-3 rounded-md ml-2 p-2 hover:text-white hover:border-none cursor-pointer hover:bg-indigo-500'>
                                {category}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories