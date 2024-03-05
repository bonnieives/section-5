import React from 'react'
import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {

    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending the form");
        console.log(name, email, bio, role)

        setName("");
        setEmail("");
        setBio("");
        setRole("")
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Nome:</label>
            <input type='text' name="name" placeholder='Please inform your name' onChange={handleName} value={name}/>
        </div>
        <label>
            <span>E-mail</span>
            <input type="email" name="email" placeholder='Please inform your email' onChange={(e) => setEmail(e.target.value) } value={email}/>
        </label>
        <label>
            <span>Bio:</span>
            <textarea name='bio' placeholder="User self-description" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        <label>
            <span>Function on system</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">User</option>
                <option value="editon">Editor</option>
                <option value="admin">Admin</option>
            </select>
        </label>
        <input type='submit' value="send"/>
      </form>
    </div>
  )
}

export default MyForm
