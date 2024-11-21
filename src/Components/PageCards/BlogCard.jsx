import Image from "../Image"

import Paragraph from "../Paragraph"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const BlogCard = ({img,title,text,btext,ctext}) => {
  return (
    <>
     <div className="w-[370px] shadow-2xl pb-4">
            <Image className="w-full pb-[28px]" src={img}/>
            <div className="flex">
              <p className="pl-5 text-btnbgColor font-openSans">{btext}</p>
              <p className="ml-32 font-openSans text-fontColor ">{ctext}</p>
            </div>
         <h2 className="text-fontColor text-[30px] font-opensans font-semibold leading-9 pb-[20px] pl-5 mt-4 pr-8 ">{title}</h2>
           
            <Paragraph text={text} className="text-servicepColor text-[16px] text-fontColor font-regular leading-[30px] pl-5 pr-8"/>
            <Link to='' className="cursor-pointer">
            <div className="flex ml-5">
            <h3 className="mt-[15px] font-bold font-openSans hover:text-btnbgColor">Read More</h3>
            <HiOutlineArrowLongRight className="text-[26px] text-fontColor hover:text-btnbgColor mt-4"/>
            </div>
            </Link>
            
         </div>
        
    
    </>
  )
}

export default BlogCard
