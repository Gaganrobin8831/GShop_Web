import React from 'react'
import Title from '../components/Title/title.Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/home/newsLetter.home'

function about() {
  return (
    <div>

      <div className=' text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className=' my-10 flex flex-col md:flex-row gap-16'>

        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo enim nihil laborum tenetur molestias recusandae facilis consectetur dolorem officia, labore, ipsa quasi, natus ullam reprehenderit alias beatae velit eligendi autem!</p>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis corrupti alias fugit repudiandae, deserunt adipisci repellat facilis mollitia numquam sapiente aut dolorum explicabo voluptate veritatis fugiat. Delectus sunt praesentium voluptates!</p>

          <b className='text-gray-800'>Our Mission</b>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum quisquam, corrupti ut repudiandae fugiat aut doloribus, voluptatibus ab mollitia ducimus, totam iste eos modi nisi architecto qui amet velit?</p>
        </div>
      </div>

      <div className=' text-4xl py-4'>

        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality Assurance ensures that our Fashion Ipsum generator delivers accurate, fashion-centric placeholder text tailored to your needs, maintaining the highest standards in every output.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Convenience is at the heart of Fashion Ipsum, offering an effortless way to generate stylish placeholder text to enhance your design projects.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Exceptional Customer Service is our promise—connect with us on social media and share your feedback or innovative uses for Fashion Ipsum in your projects.</p>
        </div>


      </div>

      <NewsletterBox/>

    </div>
  )
}

export default about