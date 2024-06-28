import React from 'react'
import ChatScreen from './Components/ChatScreen'

import MessageSentBox from './Components/MessageSentBox'
import Header from './Components/Header'

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
    <ChatScreen />

    <MessageSentBox/>
  </div>
  )
}

export default App