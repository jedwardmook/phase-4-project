import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ListingsContainer from './ListingsContainer';
import Listing from './Listing';
import Host from './Host';
import ReviewForm from './ReviewForm';
import EditProfile from './EditProfile';
import NotFound from './NotFound';
import ReviewEdit from './ReviewEdit';
import LoggedInUser from './LoggedInUser';

function App() {
  const [currentUser, setCurrentUser] = useState([])
  const [openMenu, setOpenMenu] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const closeMenu = () => {
    if(openMenu){
    setOpenMenu(!openMenu)
    } 
  }
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    })
  }, []);

  function handleLogOut(){
    fetch("/sessions/1", {
    method: "DELETE"
        }).then((response) =>{
            if (response.ok) {
                setCurrentUser([]);
                setIsLoggedIn(false)
            }   
        });
}


  return (
    <Router>
    <div className="App">
      <Navbar 
        currentUser={currentUser}
        handleLogOut={handleLogOut}
        openMenu={openMenu}
        handleMenu={handleMenu}
        closeMenu={closeMenu}
        isLoggedIn={isLoggedIn}
        />
      <Routes>
      <Route exact path='/'
        element={<ListingsContainer
          openMenu={openMenu} 
          closeMenu={closeMenu}/>}
        />
      <Route path='/login' 
        element={<Login 
          setCurrentUser={setCurrentUser}
          setIsLoggedIn={setIsLoggedIn}/>}
        />
      <Route path='/signup' 
        element={<Signup 
          setCurrentUser={setCurrentUser}
          setIsLoggedIn={setIsLoggedIn}/>}
        />
      <Route path='/host' 
        element={<Host />}
        />
      <Route path={`/users/:userID/profile`} 
        element={<Profile 
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}/>}
        />
      <Route path='my_profile'
        element={<LoggedInUser
          currentUser={currentUser}/>}
        />
      <Route path={`/listings/:listingID`} 
        element={<Listing 
          currentUser={currentUser}
          />}
        />
      <Route path={`/listings/:listingID/add_review`}
        element={<ReviewForm 
          currentUser={currentUser}/>}
        />
      <Route path={`/my_profile/edit_profile`}
        element={<EditProfile
          handleLogOut={handleLogOut}
          setCurrentUser= {setCurrentUser}
          currentUser={currentUser}/>}
        />
      <Route path={`/users/:userID/profile/edit_review/:reviewID`}
        element={<ReviewEdit
          currentUser={currentUser}/>}
        />
      <Route path='*' 
        element={<NotFound />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
