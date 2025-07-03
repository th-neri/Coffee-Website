import { init } from 'aos';
import React from 'react'
import Slider from 'react-slick'

const TestimonialData = [
  {
    id: 1,
    name: "Mark",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet commodi, odio aperiam reprehenderit voluptates voluptatibus excepturi at nisi ipsam.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Anna",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet commodi, odio aperiam reprehenderit voluptates voluptatibus excepturi at nisi ipsam.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Marco",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet commodi, odio aperiam reprehenderit voluptates voluptatibus excepturi at nisi ipsam.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Diego",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet commodi, odio aperiam reprehenderit voluptates voluptatibus excepturi at nisi ipsam.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='py-10 mb-10'>
      <div className='container mx-auto'>
        <div data-aos="fade-up" className='mb-10'>
          <h1 className='text-4xl font-bold font-pacifico text-gray=800'>Testimonials</h1>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {
              TestimonialData.map((data, index) => {
                return <div className='my-6' key={data.id}>
                  <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                    <div className='mb-4'>
                      <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                      <div className='space-y-3'>
                        <p className='text-xs text-gray-500'>{data.text}</p>
                        <h1 className='text-xl font-bold text-black/60 font-pacifico'>{data.name}</h1>
                      </div>
                    </div>
                    <div className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</div>
                  </div>
                </div>
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
