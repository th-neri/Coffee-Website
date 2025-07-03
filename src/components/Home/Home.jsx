import React from 'react'
import HeroImg from '../../assets/coffee2.png'

const Home = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white'>
      <div className="container mx-auto pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className='order-2 sm:order-1 flex flex-col justify-center gap-6'>
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className='text-5xl sm:text-6xl lg:text-7xl font-bold'>We serve the richest <span data-aos="zoom-out" data-aos-delay="300" className='text-primary font-pacifico'>Coffee</span> in the city</h1>
            <div
              data-aos="fade-up"
              data-aos-delay="400">
              <button className='bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full py-2 px-12 text-white hover:scale-105 duration-200 mt-5'>Coffee</button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className='min-h-[450px] flex justify-center items-center order-1 sm:order-2'>
            <img src={HeroImg} alt="" className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
