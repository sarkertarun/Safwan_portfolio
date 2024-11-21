import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Line1 from '../../assets/line1.png';

const Whowe = () => {
  return (
    <>
      <div className="relative">
        <Image src={Line1} className='z-20 absolute hidden md:block ml-[1380px]' />
      </div>
      <section className="pt-[50px]">
        <Container>
          <Flex className="flex-col md:flex-row justify-start">
            <div className="w-full md:w-[870px]">
              <Flex className='gap-x-5 flex-col md:flex-row'>
                <div className="w-full md:w-[370px]">
                  <Image className="w-full h-[495px]" src={Img2} />
                </div>
                <div className="flex flex-col gap-4">
                  <Image src={Img3} className='mb-8 w-full mt-4 md:mt-0' />
                  <Image src={Img4} className='w-full -mt-8 md:mt-0' />
                </div>
              </Flex>
            </div>

            <div className="w-full md:w-[910px] ml-0 md:ml-10">
              <Flex className="items-center mb-3">
                <HiOutlineArrowLongRight className="text-[40px] text-btnbgColor mt-2 md:mt-4" />
                <div className="mt-3 px-2">
                  <Paragraph text="About Me" className='text-btnbgColor font-medium text-[18px]' />
                </div>
              </Flex>
              <div>
                <Heading as='h3' text="I Enjoy Solving Problems With Scalable Solutions" className="text-[30px] font-medium text-green-900 md:text-[50px] ml-2 md:ml-0" />
                <Paragraph text="Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur aeci velit, sed quia non numquam eius modi tempora incidunt lao magnam aliquam quaerat voluptatem reprehenderit." className="text-green-800 text-sm font-openSans font-regular leading-[30px] pt-[5px] md:text-sm ml-2 md:ml-0" />
                <Paragraph text="Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem reprehenderit non numquam eius." className="text-green-800 text-sm font-openSans font-regular pt-[10px] pr-[30px] leading-[30px] md:text-sm ml-2 md:ml-0" />
              </div>
              <button className="relative items-center justify-center ml-2 md:ml-0 mt-[20px] px-12 py-3.5 text-lg leading-9 text-white bg-btnbgColor border border-btnbgColor">
                <span className="absolute inset-1 border-2 border-white"></span>
                <span className="relative z-10">Download CV</span>
              </button>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Whowe;
