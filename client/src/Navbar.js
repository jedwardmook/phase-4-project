import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import menu from './images/menu.jpg'
import profile_icon from './images/user_icon_lrg.jpg'
import user_icon from './images/user_icon.jpg'
import logo from './images/logo.jpg'

function Navbar({currentUser}){
    const [openMenu, setOpenMenu] = useState(false)
    const [currentUserVarify, setCurrentUserVarify] = useState(false)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleVarify = () => {
      if(currentUser){
        setCurrentUserVarify(!currentUserVarify)
      }
    }

    useEffect(() => {handleVarify()}, [currentUser])

    return (
        <div>
          <div className="navbar">
          <Link to="/"><img className="logo" src={logo} alt="User" /></Link>
            <div>
            <Link className="link" to="/"><h3 className="heir">heirbnb</h3></Link>
            </div>
            <Link to="/host" className="host_link" onClick={handleMenu}><button className="host">Become a Lord</button></Link>
            <div>
              <button onClick={handleMenu} className="user_button"><img className="menu_image" src={menu} alt="User"/><img className="user_icon" src={currentUser.photo? profile_icon: user_icon} alt="User"/></button>
              <div className={openMenu? "user_menu":"off"}>
                <Link to="/login" className="link" onClick={handleMenu}><h4 className="menu_link_log">Log in</h4></Link>
                <Link to="/signup" className="link" onClick={handleMenu}><h4 className="menu_link">Sign up</h4></Link>
                <hr/>
                <Link to="/host" className="link" onClick={handleMenu}><h4 className="menu_link">Host</h4></Link>
            </div>
             </div>
          </div>
       </div>
    )
}

export default Navbar;