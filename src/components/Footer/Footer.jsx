import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import FooterBg from '../../assets/website/coffee-footer.jpg'

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
}

const Footer = () => {
    return (
        <div style={bgImage} className='text-white'>
            <div className="bg-black/40 min-h-[400px]">
                <div className='container mx-auto grid md:grid-cols-3 pt-5 pb-20'>
                    <div className='py-8 px-4'>
                        <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl font-pacifico'>Coffee Cafe</a>
                        <p className='pt-4'>Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape</p>
                    </div>
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index} className='hover:scale-105 duration-200'>
                                            <a href={data.link}>{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index} className='hover:scale-105 duration-200'>
                                            <a href={data.link}>{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='py-8 px-4 sm:col-auto'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
                            <div className=''>
                                <p className='mb-3'>São Paulo, Brazil</p>
                                <p className=''>+55 1111-1111</p>
                                <div className='space-x-3 mt-6'>
                                    <a href="#">
                                        <FaFacebook className='text-xl inline-block hover:scale-105 duration-200' />
                                    </a>
                                    <a href="#">
                                        <FaInstagram className='text-xl inline-block hover:scale-105 duration-200' />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className='text-xl inline-block hover:scale-105 duration-200' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
