import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const RightTwoArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
      className={`${className} text-[60px]  absolute inline-block  right-[150px] top-1 `}
      // style={{ ...style, display: "inline-block", background: "red", }}
      onClick={onClick}><FaArrowRight  className="text-fontColor rounded-full bg-white hover:text-btnbgColor hover:border-none  p-3"/></div>
    )
}


export default RightTwoArrow