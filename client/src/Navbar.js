import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import menu from './images/menu.jpg'
import user_icon from './images/user_icon.jpg'
import logo from './images/logo.jpg'

function Navbar({currentUser}){
    const [openMenu, setOpenMenu] = useState(false)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const [photo] = currentUser
    console.log(currentUser)

    return (
        <div>
          <div className="navbar">
            <img className="logo" src={logo} />
            <div>
              <h3 className="heir">heirbnb</h3>
            </div>
            <button className="host">Become a Host</button>
            <div>
              <button onClick={handleMenu} className="user_button"><img className="menu_image" src={menu} /><img className="user_icon" src={photo? {photo}: user_icon} /></button>
              <div className={openMenu? "user_menu":"off"}>
                <Link to="/login" className="link" onClick={handleMenu}><h4 className="menu_link_log">Log in</h4></Link>
                <Link to="/signup" className="link" onClick={handleMenu}><h4 className="menu_link">Sign up</h4></Link>
                <hr/>
                <h4 className="menu_link">Host</h4>
            </div>
             </div>
          </div>
       </div>
    )
}

export default Navbar;