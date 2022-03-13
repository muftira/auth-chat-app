import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { putUser } from '../axiosApi'
import {getID} from '../action/userAction'

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.UserReducer);
    const dispatch = useDispatch()

    const data = {
      username, password
    }

    const handleClick = async () => {
      dispatch(getID(data))
      const body = {'username' : user.username, 'secret' : user.password }
      try {
        const res = await putUser(body)
        navigate('/chat')
      } catch (error) {
        
      }
    }
  
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-base via-white to-base flex flex-col justify-center items-center">
      <p className="mb-28 font-bold md:text-6xl text-4xl text-black">Muftira Chat</p>
      <div className="md:h-96 md:w-96 h-80 w-80  bg-base rounded-3xl flex justify-center items-center flex-col shadow-xl shadow-slate-600">
        <div>
          <p className='text-white'>Username</p>
          <input 
          type="text" 
          className="px-3 py-2 border border-slate-400 rounded-md h-10 w-72 mt-2"
          onChange={(e) => setUsername(e.target.value)}
          />
          <p className="mt-5 text-white">Password</p>
          <input 
          type="password"
          className="px-3 py-2 border border-slate-400 rounded-md h-10 w-72 mt-2"
          onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button 
            className='h-10 w-72 bg-yellow-500 mt-5 rounded-md text-black'
            onClick={() => handleClick()}
            >Create Account</button>
            <div className="flex justify-center mt-2">

              <p className="text-black"> have account ? <button className="text-white" onClick={() => navigate('/')}>Log In</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp