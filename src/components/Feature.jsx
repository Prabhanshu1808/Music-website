import React, { useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import {motion} from "framer-motion";

function Feature({icon, title}) {
    const variant={
        true:{
            transform : "scale(1)",
        },
        false:{
            transform : "scale(0.5)",
        }
    };
  const [elementIsVisible, setElementIsVisible] = useState(false);
  return (
      <VisibilitySensor onchange={(isVisible)=>setElementIsVisible(isVisible)} >
   <div className="Feature flex flex-col items-center justify-center relative text-center mx-12">

       {/* icon */}
       <motion.div variants={variant} animate={`${elementIsVisible}`} transition={{duration: 1 , type: 'ease-out'}} 
       className="icon bg-[#081730] rounded-2xl p-4">
           <img src={require(`../image/${icon}.png`)} alt="" className='w-[3rem]'/>
       </motion.div>
       
       <span className='mt-5'>{title}</span>
       <span className='text-[#707070] mt-4'>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, vitae!
       </span>
       <span className='text-[#E600FF] underline mt-[3rem] hover:cursor-pointer'>Learn More!</span>
   </div>
   </VisibilitySensor >
  )
}

export default Feature