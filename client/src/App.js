import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  const [currentUser, setCurrentUser] = useState([])
  

  return (
    <Router>
    <div className="App">
      <Navbar 
        currentUser={currentUser}
        />
      <Routes>
      <Route path='/login' 
        element={<Login 
                setCurrentUser={setCurrentUser}
                />}
        />
      <Route path='/signup' element={<Signup />}
        />
      <Route path='profile' element={<Profile />}
        />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
