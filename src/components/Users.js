import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UsersInfo, { ChangeCurrentUser } from './users_components/UsersInfo';
import { sortBy } from './users_components/Functions';
import UserPosts from './users_components/UserPosts';
import PointerClass from './users_components/PointerClass';
import { CurrentUserContextProvider } from './users_components/contexts/CurrentUserContext';

export default function Users() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const data = sortBy(response.data, 'name')
        setUsers(data)
        setCurrentUser(data[0])
      })
      .catch(error => console.log(error))
  }, [])

  function updateCurrentUser(e) {
    const newCurrentUser = users.find(user => user.id === parseInt(e.target.value))
    setCurrentUser(newCurrentUser)
  }

  return (
    <div className="App">
      <PointerClass>
        <CurrentUserContextProvider value={currentUser}>
          <header className="App-header">
            <div className='users-info' style={{ float: 'left' }}>
              <UsersInfo users={users} />
            </div>
            <div className='current-user' style={{ float: 'left', paddingTop: '30px' }}>
              <ChangeCurrentUser users={users} updateCurrentUser={updateCurrentUser} />
            </div>
          </header>
          <hr id='hr-style'/>

          <section>
            <UserPosts />
          </section>
        </CurrentUserContextProvider>
      </PointerClass>
    </div>
  );
}
