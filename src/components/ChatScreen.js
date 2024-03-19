import React, { useState, useContext, useReducer } from 'react'
import ChatList from './chats_components/ChatList'
import Chat from './chats_components/Chat'
import { SelectedUserContextProvider } from './chats_components/contexts/SelectedUserContext'
import { usersData } from './chats_components/ChatData'
import '../stylesheets/Chats.css'

function ChatScreen() {
  const [selectedUser, setSelectedUser] = useState(usersData[0])

  function setCurrentUser(e) {
    const updatedUser = usersData.find((datum) => datum.id === parseInt(e.target.id))
    setSelectedUser(updatedUser)
  }

  return (
    <div className='main-content'>
      <SelectedUserContextProvider value={{user: selectedUser, setUser: setCurrentUser}}>
        <ChatList />
        <Chat />
      </SelectedUserContextProvider>
    </div>
  )
}

export default ChatScreen
