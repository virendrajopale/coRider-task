import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import ChatBox from './ChatBox';

interface Message {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time: string;
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const fetchMessages = async () => {
    setLoading(true);
    
    try {
      const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`);
      if (response.data && response.data.chats && Array.isArray(response.data.chats)) {
        if (initialLoad) {
          setMessages(response.data.chats);
          setTimeout(() => {
            if (chatContainerRef.current) {
              chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
              console.log("Initial load scrollTop:", chatContainerRef.current.scrollTop);
            }
          }, 0);
         
          setInitialLoad(false);
        } else {
          setMessages((prevMessages) => [...prevMessages,...response.data.chats.reverse()]);
        }
      } else {
        console.error('Expected an array of messages but got:', response.data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
   
  
  };
//  console.log(chatContainer.scrollHeight)

  const scrollThrottle = <T extends (...args: any[]) => any>(callback: T, delay: number) => {
    let timeout: NodeJS.Timeout | null = null;
  
    return (...args: Parameters<T>): void => {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          callback(...args);
        }, delay);
      }
    };
  };
 
  useEffect(()=>{

    fetchMessages()
    const chatContainer = chatContainerRef.current;
    
      if (chatContainer) {
        console.log(chatContainer.scrollTop)
        console.log(chatContainer.scrollHeight)
         chatContainer.addEventListener('scroll', handleScroll);
        
        // chatContainer.scrollTop =900 ;
        // chatContainer.scrollTop = 80;
      }
    
      return () => {
        if (chatContainer) {
          chatContainer.removeEventListener('scroll', handleScroll);
        }
      };
      
  },[page])

  const handleScroll = scrollThrottle(() => {
    const chatContainer = chatContainerRef.current;

    if (chatContainer) {

      if (chatContainer.scrollTop  <= 500  ) {
        
        setPage((prevPage) => prevPage + 1);
        // fetchMessages()
        // chatContainer.scrollTop =100;
      }
    }
  },100);

  return (
    <div ref={chatContainerRef} className="h-[80%] overflow-y-auto no-scrollbar " >
      <div className="flex flex-col-reverse">
      {loading && <p>Loading...</p>}
        {messages.length > 0 && messages?.map((message) => (
          <ChatBox key={message.id} isSenderSelf={message.sender.self} message={message.message} profile={message.sender.image} isVerified={message.sender.is_kyc_verified}/>
        ))}
      </div>
      {loading && <div className="flex justify-center"><div className="loader"></div></div>}
    </div>
  );
};

export default ChatScreen;

