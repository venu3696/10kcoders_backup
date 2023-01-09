import React from 'react'
import {useNavigate} from 'react-router-dom'

const User = ({usr}) => {
    const navigate = useNavigate()
    const handleDelete=(usr)=>{
        console.log(usr);
        navigate('/delete/' + usr.id)
    }
    const handleEdit=(usr)=>{
         navigate('/edit/'+usr.id)
    }
  return (
    <tr>
      <td>{usr.id}</td>
      <td>{usr.name}</td>
      <td>{usr.username}</td>
      <td>{usr.email}</td>
      <td>{usr.password}</td>
      <td>
        <button className="btn btn-warning" onClick={()=>{handleEdit(usr)}}>Edit</button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(usr);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
    )
}

export default User