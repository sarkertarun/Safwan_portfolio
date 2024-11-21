import React from 'react'
import Image from '../Image'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import Paragraph from '../Paragraph';

const ProjectCard = ({img,alt,headtext,title,para,Btext}) => {
  return (
    
    <>
    <div className="mt-10 mb-16 shadow-lg">
        <Image src={img} alt={alt} className='w-full'/>
        <div className="ml-5">
        <Paragraph text={headtext} className='font-openSans font-medium text=[16px] text-btnbgColor mt-5' />
        <h3 className='font-openSans font-medium text-[24px] text-fontColor '>{title}</h3>

        <Paragraph text={para} className='font-openSans text-[16px] text-fontColor pt-2 pr-20  '/>
        <button>
        <div className="flex mb-9">
         <Paragraph text={Btext} className='font-openSans font-bold text-[18px] text-fontColor hover:text-btnbgColor pt-4'/>
         <HiOutlineArrowLongRight className='mt-[18px] text-[26px] text-fontColor hover:text-btnbgColor'/> 
        </div>
       
        </button>
        </div>
      </div>
    </>
  )
}

export default ProjectCard



