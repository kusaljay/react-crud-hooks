import React from 'react'

const UserTable = ({ users, editRow, removeUser }) => {
  const userRows = users.length > 0 ? (
    users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>
            <button 
              onClick={() => editRow(user)}
              className="button muted-button">Edit</button>
            <button
              onClick={() => removeUser(user.id)}
              className="button muted-button">Delete</button>
          </td>
        </tr> )
      })) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr> )
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userRows}
      </tbody>
    </table>
  )
}

export default UserTable
