import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Image from "../Image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Bulet1 from '../../assets/bulet1.png';
import ServiceDatas from "../../datas/ServiceDatas";
import ServiceCard from "../../Components/PageCards/ServiceCard";

const Service = () => {
  const serviceData = ServiceDatas();

  return (
    <div className="pt-[50px] pb-[40px] md:pt-[180px] md:pb-[100px]">
      <div className="relative">
        {/* Hide Bulet1 image in mobile version */}
        <Image src={Bulet1} className='absolute mt-[120px] hidden md:block' />
      </div>
      <Container>
        {/* Flex container for mobile layout */}
        <Flex className="items-center text-center relative justify-center flex-row md:flex-row">
          <HiOutlineArrowLongRight className="text-[30px] text-btnbgColor mt-4 mb-2 md:mb-0 md:mt-2" />
          <Heading text="My Services" as="h6" className="font-openSans text-[18px] text-btnbgColor font-medium leading-normal mt-2" 
          />
        </Flex>

        {/* Subheading/Paragraph */}
        <Paragraph 
          className="text-fontColor font-openSans text-[50px] font-bold text-center hidden md:block pl-[260px] pr-[250px] leading-2" 
          text="Provide Wide Range of Digital Services."
        />
        <Paragraph 
          className="text-fontColor font-openSans text-[28px] font-bold text-center block md:hidden px-6 leading-tight" text="Provide Wide Range of Digital Services."
        />

        {/* Service Cards */}
        <Flex className="ml-20 gap-x-20 justify-center pt-12 hidden md:flex">
          {serviceData?.serData.map((el, index) => (
            <div className="" key={index}>
              <ServiceCard
                img={el.img}
                title={el.title}
                text={el.text}
              />
            </div>
          ))}
        </Flex>

        {/* Mobile-specific service card layout */}
        <Flex className="flex-wrap justify-center gap-6 pt-8 md:hidden">
          {serviceData?.serData.map((el, index) => (
            <div className="w-full px-4 sm:w-1/2" key={index}>
              <ServiceCard
                img={el.img}
                title={el.title}
                text={el.text}
              />
            </div>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Service;
