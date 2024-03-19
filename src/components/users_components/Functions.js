import axios from 'axios'

export function sortBy(data, type, order) {
  // get value from user to sort ---- to do
  data = data.sort((a, b) => {
    const nameA = a[type]//.toUpperCase();
    const nameB = b[type]//.toUpperCase();
    if (order === 'desc') {
      if (nameA < nameB) { return 1; } // nameA comes before nameB
      if (nameA > nameB) { return -1; } // nameA comes after nameB
      return 0; // names are equal
    } else {
      if (nameA < nameB) { return -1; } // nameA comes after nameB
      if (nameA > nameB) { return 1; } // nameA comes before nameB
      return 0; // names are equal
    }
  })

  return data;
}

export const createPost =  async (event, attributes) => {
  event.preventDefault();

  const { posts, dispatch, CurrentUser } = attributes
  const title = event.target.elements.title
  const body = event.target.elements.body

  let message = document.getElementById('create-post-msg');
  if (title.value === "") {
    const text = document.createTextNode("Title can't be blank!");
    addMessage(message, text, 'error');
    removeMessage(message);
  } else {
    axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      { title: title.value, body: body.value, userId: CurrentUser?.id }
    )
    .then(response => {
      let updatedPosts = posts;
      updatedPosts = [...updatedPosts, response.data]
      dispatch({ data: updatedPosts, type: 'success' })
      const text = document.createTextNode('Post created successfully');
      addMessage(message, text, 'success');
    })
    .catch(error => {
      console.log(`ERROR fetching posts - ${error}`)
      const text = document.createTextNode('Post creation failed');
      addMessage(message, text, 'error');
    })
    .finally(_ => clearForm(title, body, message))
  }
}

const addMessage = (message, text, type) => {
  message.classList.add(type);
  message.append(text);
}

const removeMessage = (message) => {
  setTimeout(() => { message.innerHTML = ''; message.className = '' }, 1000);
}

const clearForm = (title, body, message) => {
  title.value = '';
  body.value = '';
  removeMessage(message);
}
