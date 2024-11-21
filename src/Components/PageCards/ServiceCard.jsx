import Image from "../Image"

import Paragraph from "../Paragraph"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SeviceCard = ({img,title,text}) => {
  return (
    <>
   
         <div className="w-[370px] py-[55px] px-[45px]   rounded-[20px] shadow-2xl">
            <Image className="inline-block pb-[28px]" src={img}/>
         <h2 className="text-fontColor text-lg font-opensans font-semibold leading-9 pb-[20px]">{title}</h2>
           
            <Paragraph text={text} className="text-servicepColor text-[16px] text-fontColor font-regular leading-[30px]"/>
            <Link to='' className="cursor-pointer"><HiOutlineArrowLongRight className="text-[50px] text-fontColor hover:text-btnbgColor mt-5"/></Link>
            
         </div>
        
         
    </>
  )
}

export default SeviceCard

// 
// 