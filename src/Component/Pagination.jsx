import React from 'react'
import { useGloabalContext } from '../Context'

const Pagination = () => {

const{page,nbPages,getPrevPage,getNextPage}=useGloabalContext();


  return (
    <>
    
    <div className='pagination-btn flex justify-center text-center mt-8 gap-5'>

    <button type="button"  onClick={()=>getPrevPage()} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">PREV</button>

      <p className='mt-2'>{page+1} of {nbPages}</p>
      <button type="button"  onClick={()=>getNextPage()} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Next</button>

    </div>
    </>
  )
}

export default Pagination