import React, { useState } from 'react'
import Container from '../Container'
import Heading from '../Heading'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Flex from '../Flex';
import Paragraph from '../Paragraph';
import Slider from "react-slick";
import WrapMyWork from './WrapMyWork';
import RightTwoArrow from '../RightTwoArrow';
import Image from '../Image';
import Shape1 from '../../assets/shape1.png'
import product from '../../../public/Product.json'


const MyWork = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  

  // Handle  category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
  };

  // Get selected category data
  const selectedCategoryData = product.categories.find(
    (cat) => cat.name === selectedCategory
  );

  const itemsToShow = selectedCategory === ''
    ? product.categories
        .filter(category => category.name !== 'All') // Ignore 'All' category itself
        .reduce((acc, category) => [...acc, ...category.items], [])
    : selectedCategoryData.items;

  const settings = {
    className: "slider-container",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    nextArrow:<RightTwoArrow/>

  };

  return (
    <>
    <div className='pt-[120px] pb-16'>
      <div className="relative">
        <Image src={Shape1} className="absolute top-[1150px] left-[1260px]"/>
      </div>
    <Container>
    <Flex className="justify-center">
          <HiOutlineArrowLongRight className="text-[30px] text-btnbgColor "/>
          <Heading text="My Portfolio" as="h6" className="font-openSans text-[18px] text-btnbgColor font-medium leading-normal text-center"/>
          </Flex>
          <Paragraph className="text-center text-fontColor font-openSans text-[50px] font-medium leading-2 " text="My Work Example"/>
         
          {/* Sub Navbar */}
          <div>
          <ul className='flex gap-x-7 justify-center'>
          {product.categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer font-openSans font-semibold text-[16px] text-fontColor  border-b-4 items-center border-transparent hover:border-b-btnbgColor ${selectedCategory === category.name ? 'text-fontColor' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </li>
          ))}
          </ul>
          </div>
          
      {/* Display Items */}
      <h1 className="text-3xl font-bold font-openSans text-fontColor mb-8 mt-4 text-center">
          {selectedCategory} Items
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
          {itemsToShow.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

            </div>
          ))}
        </div>

           

            <Slider {...settings}>
             
              <WrapMyWork/>
              <WrapMyWork/>
              <WrapMyWork/>

            </Slider>

            




    </Container>
    </div>





    </>
  )
}

export default MyWork

// font-openSans text-[16px] text-fontColor  border-b-2 border-transparent hover:border-b-btnbgColor