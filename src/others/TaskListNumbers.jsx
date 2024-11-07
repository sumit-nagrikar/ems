import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 gap-5 justify-between'>
        <div className='bg-blue-400 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>

        <div className='bg-yellow-400 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>Accepted</h3>
        </div>

        <div className='bg-green-400 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>Completed</h3>
        </div>

        <div className='bg-red-400 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers