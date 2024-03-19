import React, { useReducer, useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { CurrentUserContext } from './contexts/CurrentUserContext'
import { sortBy, createPost } from './Functions';
import '../../stylesheets/Users.css'


function UserPosts() {
  const CurrentUser = useContext(CurrentUserContext)
  const [posts, dispatch] = useReducer(reducerFunc, [])

  function reducerFunc(state, payload) {
    switch (payload.type) {
      case 'success':
        return payload.data
      case 'fail':
        return []
      default:
        return state
    }
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch({ data: response.data, type: 'success' })
      })
      .catch(error => {
        console.log(`ERROR fetching posts - ${error}`)
        dispatch({ type: 'fail' })
      })
  }, [])

  let userPosts = posts.filter((datum) => datum.userId === CurrentUser?.id)
  userPosts = sortBy(userPosts, 'id', 'desc')

  return (
    <>
      {
        userPosts.length > 0 ? (
          <>
            <div className='users-posts'>
              <h3>Current User Posts</h3>
              Total posts of current user: {userPosts.length} (out of {posts.length})
              <ul className='users-posts-data'>
                {
                  userPosts.map((post, idx) => {
                    return (
                      <li key={idx}>
                        <p><strong>Title:</strong> {post.title}</p>
                        <p><strong>Description:</strong> {post.body}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            { postForm(posts, dispatch, CurrentUser) }
          </>
        ) : (
          <div className='users-posts'>ERROR fetching posts. Please try again</div>
        )
      }
    </>
  )
}

const postForm = (posts, dispatch, CurrentUser) => {
  return (
    <div id='create-user-post'>
      <strong>Create new post</strong>
      <form onSubmit={(event) => createPost(event, { posts: posts, dispatch: dispatch, CurrentUser: CurrentUser })}>
        <table>
          <tbody>
            <tr>
              <td> Title </td>
              <td><input type='text' name='title' /></td>
            </tr>
            <tr>
              <td> Description </td>
              <td><input type='text' name='body' /></td>
            </tr>
            <tr><td></td></tr>
            <tr style={{ textAlign: 'center' }}>
              <td colSpan={2}><input type='submit' value='Create Post' /></td>
            </tr>
          </tbody>
        </table>
        <div id='create-post-msg'></div>
      </form>
    </div>
  )
}

export default UserPosts
