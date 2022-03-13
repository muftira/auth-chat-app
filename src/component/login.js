import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {getID,} from '../action/userAction'
import {getUser} from '../axiosApi'

function Auth() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = {
    username, password 
  }
  
  const handleClick = async () => {
    dispatch(getID(data))
    try {
      const res = await getUser()
    } catch (error) {
      console.log('GAGAL', error);
    }
    navigate("/chat");
  };

 

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-white via-base to-white flex flex-col justify-center items-center">
      <p className="mb-28 font-bold md:text-6xl text-4xl text-black">Muftira Chat</p>
      <div className="md:h-96 md:w-96 h-80 w-80 bg-white rounded-3xl flex justify-center items-center flex-col shadow-xl shadow-slate-600">
        <div>
          <p>Username</p>
          <input 
          type="text" 
          className="px-3 py-2 border border-slate-400 rounded-md h-10 w-72 mt-2" 
          onChange={(e) => setUsername(e.target.value)}
          />
          <p className="mt-5">Password</p>
          <input 
          type="password"
          className="px-3 py-2 border border-slate-400 rounded-md h-10 w-72 mt-2"
          onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button onClick={() => handleClick()}
            className='h-10 w-72 bg-yellow-500 mt-5 rounded-md text-black'
            >LogIn</button>
            <div className="flex justify-center mt-2">

              <p className="text-gray-500">Don't have any account yet ? <button className="text-base" onClick={() => navigate('/signup')}>Sign Up</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
