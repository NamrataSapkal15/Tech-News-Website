import React from 'react'
import { useGloabalContext } from '../Context'

const Search = () => {


  const {query,searchPost}= useGloabalContext();
  return (
    
    <>
    <div>
      <h1 className='text-3xl font-bold text-center mt-5 '> Tech News Website</h1>
      <form onSubmit={(e) => e.preventDefault()}  className='text-center mt-5 '>
        <input type='text' placeholder='search here' className='bg-white  border border-gray-500 w-1/4 py-2 shadow-md'
        value={query}
        onChange={(e) => searchPost(e.target.value)}
        />
      </form>
    </div>
    
    </>
  )
}

export default Search