import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  const [currentUser, setCurrentUser] = useState([])
  
  useEffect(() => {
    fetch("/sessions/1").then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    })
  }, []);

  console.log(currentUser)

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
      <Route path='/signup' 
        element={<Signup 
          setCurrentUser={setCurrentUser}
          />}
        />
      <Route path='profile' 
        element={<Profile 
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}/>}
        />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
