import React from 'react'
import Img2 from "../../assets/coffee2.png"

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Espresso",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consectetur!",
        aosDelay: "100",
    },
    {
        id: 1,
        img: Img2,
        name: "Americano",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consectetur!",
        aosDelay: "100",
    },
    {
        id: 1,
        img: Img2,
        name: "Cappuccino",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consectetur!",
        aosDelay: "100",
    },
]

const Services = () => {
    return (
        <>
            <span id='services'></span>
            <div className='py-10'>
                <div className='container mx-auto'>
                    <div className='text-center mb-20'>
                        <h1 className='text-4xl font-bold font-pacifico text-gray-800'>Best Coffee For You</h1>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 place-items-center'>
                        {
                            ServicesData.map((data, index) => {
                                return (
                                    <div
                                        data-aos="fade up"
                                        data-aos-delay={data.aosDelay}
                                        key={index} className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative'>
                                        <div className='max-h-[122px]'>
                                            <img src={data.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300' />
                                        </div>
                                        <div className='p-4 text-center'>
                                            <h1 className='text-xl font-bold'>{data.name}</h1>
                                            <p className='text-gray-500 group-hover:text-white duration text-sm line-clamp-2'>{data.description}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
