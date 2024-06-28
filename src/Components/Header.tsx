import React from 'react';
import { LuArrowLeft } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <div className='h-32 flex flex-col gap-4 border-b p-4 border-gray-300'>
      <span className='flex items-center justify-between gap-3'>
        <LuArrowLeft className='text-3xl'/>
        <p className='flex-1 font-bold text-3xl'>Trip 1</p>
        <FiEdit className='text-2xl'/>
      </span>
      <span className='flex items-center justify-between gap-3'>
        <div className='bg-black rounded-full h-12 w-12'>
          
        </div>
        <span className='flex-1'>
          <p className='text-[#606060]'>From <b className='text-black'>IGI Airport, T3</b></p>
          <p className='text-[#606060]'>To <b className='text-black'>Sector 28</b></p>
        </span>
        <BsThreeDotsVertical/>
      </span>
    </div>
  );
};

export default Header;