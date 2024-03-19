import React, { useContext } from 'react'
import { usersData } from './ChatData'
import { SelectedUserContext } from './contexts/SelectedUserContext'


function ChatList() {
  const { user, setUser } = useContext(SelectedUserContext)

  return (
    <div className='chat-list'>
      {
        usersData.filter(datum => datum.name != 'Current User').map(userDatum => {
          const selectedUserClass = userDatum.id === user?.id ? 'selected-user-list': ''
          return (
            <React.Fragment key={userDatum.id}>
              <div className={`user-chat-list ${selectedUserClass}`} id={userDatum.id} onClick={(e) => setUser(e)}>
                {userDatum.name}
              </div>
              <hr className='chat-divider' />
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

export default ChatList
