import React, { useState } from 'react'

const AddUserForm = ({ addUser }) => {
  const initialFormState = {
    id: null,
    name: '',
    username: ''
  }

  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser({...user, [name]: value})
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (!user.name || !user.username ) {
      return
    } else {
      addUser(user)
      setUser(initialFormState)
    }
  }

  return (
    <form onSubmit={submitForm}>
      <label>Name</label>
      <input 
        type="text" 
        name="name" 
        value={user.name}
        onChange={handleInputChange} />
      <label>Username</label>
      <input 
        type="text" 
        name="username" 
        value={user.username}
        onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm
