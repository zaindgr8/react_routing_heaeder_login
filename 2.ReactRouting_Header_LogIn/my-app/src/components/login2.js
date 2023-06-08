import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/Header')
    }
    
  return (
    <div>
        <form>

            <lable>Email</lable>
            <input type="text"  />
            <label>Password</label>
            <input type="password" />
            <button onClick={handleClick} >Submit</button>
        </form>
    </div>
  )
}

export default Login