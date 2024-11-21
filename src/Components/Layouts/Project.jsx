import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ProjectCard from '../PageCards/ProjectCard';
import Slider from 'react-slick';
import RightArrow from '../RightArrow'
import LeftArrow from '../LeftArrow'
import ProjectDatas from '../../datas/ProjectDatas';
import Shape2 from '../../assets/shape2.png'
import Image from '../Image'

const Project = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 768 ? 1 : 3, // Show 1 slide for mobile, 3 for desktop
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  const projectData = ProjectDatas();

  return (
    <div className='pt-[114px]'>
      <div className="relative">
        <Image src={Shape2} className="absolute top-[250px] left-[1290px]" />
      </div>
      <Container>
        <Flex className="text-center">
          <HiOutlineArrowLongRight className="text-[30px] text-btnbgColor" />
          <h6 className="font-openSans text-[18px] text-btnbgColor font-medium leading-normal">My Services</h6>
        </Flex>
        <Paragraph className="text-fontColor font-openSans text-[50px] font-medium leading-2" text="My Recent Projects" />

        <div className="inline-block" style={{ width: '100%', margin: '0 auto' }}>
          <Slider {...settings}>
            {projectData?.projData.map((el, index) => (
              <div className='' key={index}>
                <ProjectCard
                  img={el.img}
                  alt={el.alt}
                  headtext={el.headtext}
                  title={el.title}
                  para={el.para}
                  Btext={el.Btext}
                />
              </div>
            ))}
          </Slider>
        </div>

        <button className="relative mt-0 px-12 py-5 text-lg leading-9 text-white bg-btnbgColor border border-btnbgColor mx-auto block  md:mt-[70px]">
          <span className="absolute inset-1 border-2 border-white"></span>
          <span className="relative z-10 font-openSans font-bold">Explore More</span>
        </button>
      </Container>
    </div>
  )
}

export default Project;
