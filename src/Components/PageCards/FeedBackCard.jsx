import Container from '../Container';
import Flex from '../Flex'
import Paragraph from '../Paragraph'

import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Image from '../Image'

import Ql1 from '../../assets/quote-left1.png'
import Qr1 from '../../assets/quote-right1.png'
import { IoCaretDownSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Pic1 from "../../assets/pic1.png"
import Pic2 from "../../assets/pic2.png"
import Cote1 from '../../assets/cote1.png'


const FeedBackCard = () => {
  return (
 <>
    
      <div className="relative">
        <Image src={Ql1} className='absolute top-[50px] left-[10px]'/>
        <Image src={Qr1} className='absolute top-[320px] left-[1200px]'/>
      </div>
    <Container>
      <div className="pt-5">
      <Flex className="justify-center">
    <HiOutlineArrowLongRight className="text-[30px] text-btnbgColor "/>
    <h6 className="font-openSans text-[18px] text-btnbgColor font-medium leading-normal text-center">Client Testimonial</h6>
    </Flex>
      </div>
    <Paragraph className="text-fontColor font-openSans text-center text-[50px] font-medium leading-2 " text="Feedback From Client"/>
    <div className="relative pb-8">
    <Flex className='justify-center gap-x-8 '>
    <div className="w-[573px] mt-10 shadow-2xl">
      <div className="w-full border-t-8 border-t-btnbgColor  p-8 bg-white ">
        <Paragraph text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.' className='font-openSans text-[16px] text-fontColor'/>
      </div>
       </div>
 
      <div className="w-[573px] mt-10 shadow-2xl ">
        <div className="w-full border-t-8 border-t-btnbgColor  p-8 bg-white">
        <Paragraph text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.' className='font-openSans text-[16px] text-fontColor'/>
        </div>
       </div>
    </Flex>
    
       <IoCaretDownSharp className='absolute top-[172px] left-[50px] text-[44px] text-white'/>
       <IoCaretDownSharp className='absolute top-[172px] left-[650px] text-[44px] text-white'/>
       </div>
      <div className="flex relative top-5 mb-16">
        <div className="w-[573px] flex  gap-4">
          <div className="relative ">
            <Image src={Pic1} className="w-[80px] h-[85px] ml-[30px] border-4 border-btnbgColor rounded-full p-1"/>
            <Image src={Cote1} className='w-[28px] absolute ml-[55px] top-16  text-btnbgColor' />
            </div>
          <div className="pt-5">
            <Paragraph text='Michale Doie' className='font-openSans text-[16px] text-fontColor'/>
            <span className='font-openSans text-[16px] text-fontColor'>Product Designer</span>
            <div className="flex mt-1">
              <FaStar className='text-btnbgColor '/>
              <FaStar className='text-btnbgColor '/>
              <FaStar className='text-btnbgColor '/>
              <FaStar className='text-btnbgColor '/>
              <FaStarHalfAlt className='text-btnbgColor '/>
            </div>
          </div>

        </div>
        <div className="w-[573px] flex  ml-[10px] gap-4">
          <div className="relative ">
            <Image src={Pic2} className="w-[80px] h-[80px] ml-[50px] border-4 border-btnbgColor rounded-full p-1"/>
            <Image src={Cote1} className='w-[28px] absolute left-[78px]  top-[60px]  text-btnbgColor' />
            </div>
          <div className="pt-3">
            <Paragraph text='Adam Smith' className='font-openSans text-[16px] text-fontColor'/>
            <span className='font-openSans text-[16px] text-fontColor'>Designer</span>
            <div className="flex mt-1">
              <FaStar className='text-btnbgColor '/>
              <FaStar className='text-btnbgColor '/>
              <FaStar className='text-btnbgColor '/>
              <FaStar className='text-btnbgColor '/>
              <FaStarHalfAlt className='text-btnbgColor '/>
            </div>
          </div>

        </div>
      </div>

    </Container>
    </>


  )
}

export default FeedBackCard