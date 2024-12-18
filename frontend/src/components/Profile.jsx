import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {

    const userData = useSelector(state => state.auth.data);

  return (
    <div
        className='w-full h-screen flex flex-col justify-start items-center py-12 gap-20'

    >
        <h1 className='text-5xl font-bold font-mono text-cyan-700'>Profile</h1>
        <div className='flex flex-col gap-2 items-start'>
            <h2 className='text-2xl font-bold font-mono'><span className='text-orange-600'>Name <span className='opacity-0'>.</span></span>: {userData.fullname}</h2>
            <h2 className='text-2xl font-bold font-mono'><span className='text-orange-600'>Email </span>: {userData.email}</h2>
        </div>
    </div>
  )
}

export default Profile