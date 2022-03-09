import React from "react";
import { ChatEngine } from "react-chat-engine";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'

function Chat() {
  const {user} = useSelector((state) => state.UserReducer)
  let navigation = useNavigate();
  const handleClick = () => {
    navigation("/");
  };
  return (
    <div className="h-screen w-full bg-gradient-to-r from-white via-base to-white">
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="ef64f5a8-2947-43ea-a5e4-0971d9a750d9"
        userName={user.username}
        userSecret={user.password}
      />
      <div className="flex justify-center mt-2">
        <button
          className=" h-8 w-20 bg-yellow-500 rounded-lg shadow-lg font-bold "
          onClick={() => handleClick()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Chat;
