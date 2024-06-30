import React, { useState } from 'react';

import { VscSend } from "react-icons/vsc";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlineVideoCamera } from "react-icons/hi";

import { ImAttachment } from "react-icons/im";
import '../App.css'

const MessageSentBox: React.FC = () => {
  
 

  

  return (
    <div className="p-4 pb-4">
      <div className="relative flex items-center">
        <input
          type="text"
          
         
          placeholder="Reply to @Rohit Yadav"
          className="w-full px-4 py-2 pr-24 border-none rounded-lg focus:outline-none  custom-caret"
        />
        <div className="absolute right-2 flex items-center">
         
            
            
  <button className="group relative  p-2 rounded-full">
  <ImAttachment size={20} className=' text-[#141E0D]' />
    <span
      className="bg-[#008000] px-3 py-3 rounded-full group-hover:flex hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2 gap-4"
    >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66667 6.41814C1.66667 5.17468 2.67469 4.16666 3.91815 4.16666C4.56422 4.16666 5.13781 3.75324 5.34211 3.14032L5.41667 2.91666C5.45183 2.81118 5.46941 2.75844 5.48821 2.71166C5.72837 2.11426 6.29116 1.70863 6.93385 1.6697C6.98418 1.66666 7.03977 1.66666 7.15095 1.66666H12.8491C12.9602 1.66666 13.0158 1.66666 13.0662 1.6697C13.7088 1.70863 14.2716 2.11426 14.5118 2.71166C14.5306 2.75844 14.5482 2.81118 14.5833 2.91666L14.6579 3.14032C14.8622 3.75324 15.4358 4.16666 16.0819 4.16666C17.3253 4.16666 18.3333 5.17468 18.3333 6.41814V13.5C18.3333 14.9001 18.3333 15.6002 18.0608 16.135C17.8212 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7335 17.5 14.3333 17.5H5.66667C4.26654 17.5 3.56647 17.5 3.03169 17.2275C2.56129 16.9878 2.17883 16.6054 1.93915 16.135C1.66667 15.6002 1.66667 14.9001 1.66667 13.5V6.41814Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 9.99999C13.75 7.92892 12.0711 6.24999 10 6.24999C7.92893 6.24999 6.25 7.92892 6.25 9.99999C6.25 12.0711 7.92893 13.75 10 13.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6.42857L12.9091 10L18 13.5714V6.42857Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4545 5H3.45455C2.65122 5 2 5.63959 2 6.42857V13.5714C2 14.3604 2.65122 15 3.45455 15H11.4545C12.2579 15 12.9091 14.3604 12.9091 13.5714V6.42857C12.9091 5.63959 12.2579 5 11.4545 5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6667 10.4167V5.66666C16.6667 4.26653 16.6667 3.56646 16.3942 3.03168C16.1545 2.56128 15.7721 2.17882 15.3016 1.93914C14.7669 1.66666 14.0668 1.66666 12.6667 1.66666H7.33334C5.9332 1.66666 5.23314 1.66666 4.69836 1.93914C4.22795 2.17882 3.8455 2.56128 3.60582 3.03168C3.33334 3.56646 3.33334 4.26653 3.33334 5.66666V14.3333C3.33334 15.7335 3.33334 16.4335 3.60582 16.9683C3.8455 17.4387 4.22795 17.8212 4.69836 18.0608C5.23314 18.3333 5.93317 18.3333 7.33322 18.3333H10.4167M11.6667 9.16666H6.66667M8.33334 12.5H6.66667M13.3333 5.83332H6.66667M12.5 15.8333L15 18.3333M15 18.3333L17.5 15.8333M15 18.3333V13.3333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      <div
        className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"
      ></div>
    </span>
  </button>

    
          <button
           
            
          >
            <VscSend size={20} className=' text-[#141E0D]' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageSentBox;