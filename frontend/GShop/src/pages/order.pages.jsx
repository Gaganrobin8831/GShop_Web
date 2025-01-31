import React, { useContext } from 'react'
import { shopContext } from '../context/shop.context'
import Title from '../components/Title/title.Title'

function order() {
  const { products, currency } = useContext(shopContext)
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />

      </div>

      <div className='flex flex-col'>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='py-4  border-b text-gray-700 flex flex-col justify-between md:flex-row  md:items-center  gap-4'>
              <div className=' flex items-start text-sm gap-5'>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                <div className='gap-5 w-[260px]'>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{currency} {item.price}</p>
                    <p>Quantity:1</p>
                    <p>Size : M</p>
                  </div>
                  <p className='mt-2'>Date <span className='text-gray-400'>25,jul, 2024</span></p>

                </div>
              </div>

              <div className='md-w/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>

              </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>TRACK ORDER</button>

              </div>

            

          ))
        }

      </div>

    </div>
  )
}

export default order