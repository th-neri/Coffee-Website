import React from 'react'
import BannerImg from '../../assets/coffee-white.png'
import BgTexture from '../../assets/website/coffee-texture.jpg'
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const bgImage = {
    backgroundImage: `url(${BgTexture})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const Banner = () => {
    return (
        <>
            <div style={bgImage}>
                <div className="container mx-aut min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <div>
                            <img src={BannerImg} alt="" className='max-w-[430px] w-full mx-auto spin drop-shadow-xl' />
                        </div>
                        <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                            <h1 className='text-3xl sm:text-4xl font-bold font-pacifico'>Premium Blen Coffee</h1>
                            <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptas accusantium. Numquam sed tempora ex explicabo velit.</p>
                            <div className='grid grid-cols-2 gap-6'>
                                <div className='space-y-5'>
                                    <div className='flex items-center gap-3'>
                                        <GrSecure className='text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100' />
                                        <span>Premium Coffee</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100' />
                                        <span>Hot Coffee</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100' />
                                        <span>Cold Coffee</span>
                                    </div>
                                </div>
                                <div className='border-l-4 border-primary/50 pl-6 space-y-3'>
                                    <h1 className='text-2xl font-semibold font-pacifico'>Tea Lover</h1>
                                    <p className='text-gray-500 text-sm'>
                                        Brewing the perfect cup of tea requires patience, precision, and a dash of passion
                                        to create a comforting blend of flavors.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
