import React, { useEffect } from 'react'
import { useGloabalContext } from '../Context';


const Stories = () => {

    const { hits, isLoading, removePost} = useGloabalContext();
    if (isLoading) {
        return (
            <>
                <h2 className='text-center font-bold text-2xl'>Loading...</h2>
            </>
        )

    }



    return (
        <>
            {hits.map((curPost) => {


                const { title, author, objectID, url, num_comments } = curPost;
                return (
                    <>
                        {/* <div className='card   bg-white shadow-lg w-/2 '>
                    <h2 className='text-lg font-bold text-center'>{title}</h2>
                    <p> By <span>{author}</span>  | <span>{num_comments}</span></p>
                    <div className="card-button  ">
                        <a href={url} target='blank' className='mt-5 py-5 mx-5'>Read More</a>
                        <a href='#' className='mt-5 py-2 bg-red-500 rounded text-white' >Remove</a>
                    </div>
                </div> */}



                        <div className=' flex items-center justify-center py-2 ' key={objectID}>
                            <div class="w-[600px] p-6 justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">By{author} | <span>{num_comments} Comments</span></p>
                                <a href={url}  target='blank' class=" m-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more

                                </a>

                                <a href='#' onClick={ ()=> removePost(objectID)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    Remove

                                </a>
                            </div>
                        </div>



                    </>
                )





            })}

        </>
    );
};

export default Stories