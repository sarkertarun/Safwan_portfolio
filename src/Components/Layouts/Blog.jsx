import Container from "../Container"
import Flex from "../Flex"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

import Image from "../Image"

import { HiOutlineArrowLongRight } from "react-icons/hi2";

import BlogDatas from "../../datas/BlogDatas"
import BlogCard from "../../Components/PageCards/BlogCard"

const Blog = () => {
    const blogData = BlogDatas();
  return (
    <section className="pt-[180px] pb-[100px]">

        <Container>

          <Flex className="justify-center">
          <HiOutlineArrowLongRight className="text-[30px] text-btnbgColor "/>
          <Heading text="Letest Blogs" as="h6" className="font-openSans text-[18px] text-btnbgColor font-medium leading-normal text-center"/>
          </Flex>
       
        <Paragraph className="text-fontColor font-openSans text-[50px] font-bold  text-center leading-2 " text="Blogs & Articles"/>
        <Flex className='gap-x-20 ml-36 justify-center pt-12'>
        {blogData?.blogData.map((el,index) => (
        <div className='' key={index}>
          <BlogCard
            img={el.img}
            btext={el.btext}
            ctext={el.ctext}
            title={el.title}
            text={el.text}
          />
        </div>

        ))},
        </Flex>





        </Container>
        </section>
  )
}

export default Blog