import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-bold'>Sumit 👋</span></h1>
      <button className='bg-red-600 hover:bg-red-700 text-lg font-medium rounded-sm px-3 py-2'>Log Out</button>

    </div>
  )
}

export default Header