import React from 'react'
import ChatMessage from './ChatMessage'
import useChatLoad from './hooks/useChatLoad'


function Chat() {
  const chats = useChatLoad();

  return (
    <div className='chat-content'>
      {
        chats.map(chat => {
          return (
            <ChatMessage chat={chat} key={chat.id} />
          )
        })
      }
    </div>
  )
}

export default Chat
