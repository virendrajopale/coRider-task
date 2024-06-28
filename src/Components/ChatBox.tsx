import React from 'react';
import { MdVerified } from "react-icons/md";

interface ChatBoxProps {
  isSenderSelf: boolean;
  message: string;
  profile: string;
  isVerified: boolean;
}

const ChatBox: React.FC<ChatBoxProps> = ({ isSenderSelf, message, profile, isVerified }) => {
  return (
    <div className={`p-4 flex items-start gap-2 ${isSenderSelf ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}>
      <div className={`flex items-center mb-2 ${isSenderSelf ? 'justify-end' : 'justify-start'}`}>
        {!isSenderSelf && (
          <div className="relative">
            <img className="w-10 h-10 rounded-full" src={profile} alt="Profile" />
            {isVerified && <span className="bottom-0 left-7 absolute w-3.5 h-3.5"><MdVerified className="text-blue-700" /></span>}
          </div>
        )}
      </div>
      <div
        className={`p-3 ${
          isSenderSelf
            ? 'bg-[#1C63D5] text-[#FFFFFF] ml-auto rounded-t-xl rounded-bl-xl'
            : 'bg-[#FFFFFF] text-[#606060] mr-auto rounded-b-xl rounded-tr-xl'
        }`}
        style={{ maxWidth: '70%' }}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatBox;
