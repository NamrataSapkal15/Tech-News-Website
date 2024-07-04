import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Category = () => {
    const [categories, setCategory] = useState([]);

    const fetchCategory = async () => {
        const response = await fetch("");
        const data = await response.json();
        setCategory(data);
    }

    useEffect(
        () => {
            fetchCategory();
        }, []
    )



    return (
        <div className='max-w-[1200px] mx-auto  items-center'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>What's on your mind?</div>

                {/* images */}
                <div className='flex '>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 '> <FaArrowLeft />
                    </div>
                    <div className=' cursor-pointer  flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>

                </div>
            </div>
            <div className='flex'>
                {
                    categories.map(
                        (cat, index) => {


                            return (

                                <div className='flex-grow shrink-0' key={index}>
                                    <img src="" alt="" srcset="" />
                                </div>

                            )
                        }
                    )
                }
            </div>

        </div>


    )
}

export default Category