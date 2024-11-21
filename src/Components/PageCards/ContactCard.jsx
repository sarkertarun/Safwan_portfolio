import { Link } from "react-router-dom"
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Heading from '../Heading'
import Paragraph from '../Paragraph';
import Img2 from '../../assets/img2.png'
import { useState } from 'react';
import Bulet2 from '../../assets/bulet2.png'

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject:'',
    massage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      massage:'',
    });
  };
    
  return (
    <section className='mt-32'>
      <div className="relative">
        <Image src={Bulet2} className="absolute top-[70px] left-[1280px]"/>

      </div>
        <Container>
            <Flex className="justify-center">
                <div className='w-[470px]'>
                    <Image src={Img2} className='w-[480px]'/>
                </div>
            <div className='w-[670]'>
            <Flex className="mt-10">
          <HiOutlineArrowLongRight className="text-[30px] text-btnbgColor ml-10 "/>
          <Heading text="Get In Touch" as="h6" className="font-openSans text-[18px] text-btnbgColor font-medium leading-normal "/>
          </Flex>
                <div>
          <Paragraph className="ml-10 text-fontColor font-openSans text-[50px] font-medium leading-2 " text="Feel Free to Contact"/>

      <div className="w-[580px] mx-auto  p-10">
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flex gap-x-2'>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border-b border-gray-300  mb-8"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border-b border-gray-300  mb-8"
        />
        </div>
        <div className="flex gap-x-2">
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border-b border-gray-300 mb-8"
        />
      <input
          type="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-2 border-b font-openSans text-fontColor border-gray-300 mb-8"
        />

        </div>
        <div>
        <textarea
          name="massage"
          placeholder="Massage"
          value={formData.massage}
          onChange={handleChange}
          required
          className="w-full ml-2 pl-1 font-openSans text-[18px] text-fontColor border-b border-gray-300 "
          rows="2"
        />
        </div>
          <div className="pt-10">
          <button type='submit' className="relative items-center justify-center px-12 py-3.5 text-lg leading-9 text-white bg-btnbgColor border border-btnbgColor">
        <span className="absolute inset-1  border-2 border-white"></span>
        <span className="relative z-10">Contact us</span>
        </button>
          </div>
      </form>
    </div>
                </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default ContactCard