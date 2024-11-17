import React from 'react'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
        <div className='hidden lg:flex items-center justify-center bg-black w-1/2 px-12'>
        <div className='max-w-md space-y-6 text-center text-primary-foreground'>
         <h1 className='text-4xl font-extrabold tracking-tight'>Welcome to ecommerce shopping</h1>
        </div>
        </div>
        <div className='flex flex-1 items-center justify-center bg-background px-4 py-12 lg:px-8'>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

