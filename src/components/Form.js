import React from 'react'

const Form = () => {
  return (
    <>
    <form className='md:flex md:items-center md:justify-center md:hidden'>
        <input type='email' required className='mx-1 h-12 rounded w-full md:w-6/12' style={{border:'1px solid grey', padding:20 }} placeholder='Enter your email' />
        <button className='mx-1 mt-2 bg-purple-600 text-white py-3 border-radius-20 rounded w-full md:w-6/12' type='submit' 
        >Join Waitlist {"->"}
        </button>
    </form>
    <form className='md:flex md:items-center md:justify-center hidden md:block'>
        <input type='email' required className='mx-1 h-12 rounded' style={{border:'1px solid grey', padding:20}} placeholder='Enter your email' />
        <button className='mx-1 bg-purple-600 text-white  py-3 border-radius-20 rounded' type='submit' 
            style={{ paddingLeft:73, paddingRight:73}}
        >Join Waitlist {"->"}
        </button>
    </form>
    </>
  )
}

export default Form