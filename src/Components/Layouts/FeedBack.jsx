import React from 'react'
import Slider from "react-slick";

import FeedBackCard from '../PageCards/FeedBackCard';
const FeedBack = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
  return (
    <>
    <section className='mt-32 bg-bgColor'>
            <Slider {...settings}>
    
                <FeedBackCard/>
                <FeedBackCard/>
                <FeedBackCard/>



            </Slider>
            </section>
    </>
  )
}

export default FeedBack