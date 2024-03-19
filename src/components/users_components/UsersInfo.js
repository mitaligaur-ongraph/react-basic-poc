import React from 'react'
import '../../stylesheets/Users.css'

function UsersInfo({users = []}) {
  return (
    <>
      <h3>Users Details</h3>
      {
        users.length > 0 ? (
        <div>
          <table>
            <tbody>
              {
                  users.map((user, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{idx + 1}. </td>
                        <td>{user.name} (aka: {user.username})</td>
                        <td>(email: {user.email})</td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
        </div>
        ) : (
          <> ERROR fetching users. Please try again </>
        )
      }
    </>
  )
}

export function ChangeCurrentUser({ users, updateCurrentUser }) {
  return (
    <>
      <div>Change current user</div>
      <select style={{ marginLeft: '20px' }} onChange={e => updateCurrentUser(e)}>
        { getUsersList(users) }
      </select>
    </>
  )
}

function getUsersList(users) {
  if (users) {
    return (
      users.map(user => (
        <option key={user.id} value={user.id}>{user.email}</option>
      ))
    )
  } else {
    return (
      <option key={0} value=''>Select Current user</option>
    )
  }
}

export default UsersInfo
