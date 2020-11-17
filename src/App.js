import React, { useState } from 'react'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import './styles/main.css'

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const initialState = {
    id: null,
    name: '',
    username: ''
  }

  const [ users, setUsers ] = useState(usersData)
  const [ editing, setEditing ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState(initialState)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const removeUser = (id) => {
    setEditing(false)
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => user.id === id ? updatedUser : user))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Edit user</h2>
              <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser} />
            </>
          ) : (
            <>
              <h2>Add user</h2>
              <AddUserForm 
              addUser={addUser} />
            </>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users={users}
            editRow={editRow}
            removeUser={removeUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
