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
  const [initialLoad, setInitialLoad] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${page+1}`);
      if (response.data && response.data.chats && Array.isArray(response.data.chats)) {
        if (initialLoad) {
          setMessages(response.data.chats);
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

  useEffect(() => {
    fetchMessages();
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
      
    }
  }, []);
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
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    console.log()
    if (chatContainer) {
      // console.log(chatContainer.scrollTop)
       chatContainer.addEventListener('scroll', handleScroll);
      //  console.log(chatContainer.scrollHeight)
      chatContainer.scrollTop =900 ;
      // chatContainer.scrollTop = 80;
    }

    return () => {
      if (chatContainer) {
        chatContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [messages]);
  useEffect(()=>{
    fetchMessages()
  },[page])
  const handleScroll = scrollThrottle(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      // console.log(chatContainer.scrollTop)
      if ((chatContainer.scrollTop ) <= 50 && !loading) {

        setPage((prevPage) => prevPage + 1);
        // fetchMessages()
        // chatContainer.scrollTop =100;
      }
    }
  },600);

  return (
    <div ref={chatContainerRef} className="h-[80%] overflow-y-auto no-scrollbar" >
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

