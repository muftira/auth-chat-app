import './App.css';
import Login from './component/login';
import Chat from './component/chat';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './component/signUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </Router>
  );
}

export default App;
