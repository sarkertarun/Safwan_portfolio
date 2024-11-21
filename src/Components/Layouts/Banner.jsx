import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Image from "../Image";
import background2 from '../../assets/background2.png';
import img1 from '../../assets/img1.png'; // Main image for desktop
import Group1 from '../../assets/group1.png';

const Banner = () => {
  return (
    <div className="relative">
      {/* Full Background Image for Mobile and Desktop */}
      <Image className="absolute w-full h-[670px] object-cover lg:h-[617px]" src={background2} />

      {/* Decorative Group Image */}
      <Image className="absolute z-20 opacity-15 -top-[110px] -ml-[320px]" src={Group1} />

      <Container>
        <Flex className="relative flex-col lg:flex-row lg:items-center">
          {/* Main Image for Mobile (Shown at the Top) */}
          <Image className="block lg:hidden max-w-[300px] mx-auto mb-6" src={img1} />

          {/* Main Content */}
          <div className="relative z-30 max-w-full text-left lg:text-left">
            <Heading text='Hello!' as='h2' className="text-white font-bold text-[52px] sm:text-[70px] md:text-[94px]" />
            <Paragraph text='I’m Zarror Nibors' className='text-white font-bold text-[52px] sm:text-[70px] md:text-[94px]' />
            <Heading text="I’m a freelance #UI/UX Designer# based in Indonesia who loves to craft attractive design experiences for the web." as='h5' className="text-gray-500 text-[16px] sm:text-[18px] md:text-[18px] mt-4 pr-0 lg:pr-[520px]" />

            {/* Contact Button */}
            <div className="mt-[60px] lg:mt-12">
              <button className="relative items-center justify-center px-8 py-4 text-lg leading-9 text-white bg-btnbgColor border border-btnbgColor">
                <span className="absolute inset-1 border-2 border-white"></span>
                <span className="relative z-10 font-openSans font-bold">Contact Me</span>
              </button>
            </div>
          </div>

          {/* Main Image for Desktop (Unchanged) */}
          <Image className="hidden lg:block absolute max-w-[600px] top-0 -right-24" src={img1} />
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
