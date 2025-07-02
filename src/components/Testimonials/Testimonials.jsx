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
  return (
    <div className='py-14 mb-10'>
      <div className='container mx-auto'>
        <div className='text-center mb-20'>
            <h1 className='text-4xl font-bold font-pacifico text-gray=800'>Testimonials</h1>
        </div>
        <div>
            <Slider>

            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
