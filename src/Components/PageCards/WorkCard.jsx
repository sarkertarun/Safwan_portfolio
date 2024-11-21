import Image from '../Image'

const WorkCard = ({img,text,Btext}) => {
  return (
    <div className="mt-5 group w-[650px]">
      <div className="relative overflow-hidden inline-block">
      <Image src={img} classname="w-full"/>
      <div className="w-[570px] bg-navColor py-6 absolute bottom-[-150px] group-hover:bottom-0 duration-500">
      <h2 className='ml-5 font-openSans font-semibold text-[24px] text-white'>{text}</h2>
      <p className='ml-5 font-openSans text-[16px] text-white pt-2'>{Btext}</p>
      </div>
      </div>
        
    </div>
  )
}

export default WorkCard