import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

function footer() {
  return (
    <div>
        <div className='flext flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, animi. Quam magni perferendis temporibus quo placeat est, dignissimos voluptatem repellat.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 mt-2 sm:mb-2'>
                    COMPANY
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul  className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>contact@Gshopyou.com</li>

                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copright 2024@ Gshop.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default footer