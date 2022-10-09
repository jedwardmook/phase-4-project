import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ListingsContainer from './ListingsContainer';
import Listing from './Listing';
import HostForm from './HostForm';

function App() {
  const [currentUser, setCurrentUser] = useState([])
  
  useEffect(() => {
    fetch("/sessions/1").then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    })
  }, []);


  return (
    <Router>
    <div className="App">
      <Navbar 
        currentUser={currentUser}
        />
      <Routes>
      <Route exact path='/'
        element={<ListingsContainer 
          />}
        />
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
      <Route path='/host' 
        element={<HostForm 
          currentUser={currentUser}
          />}
        />
      <Route path={`/users/:userID/profile`} 
        element={<Profile 
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}/>}
        />
      <Route path={`/listings/:listingID`} 
        element={<Listing />}
        />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
