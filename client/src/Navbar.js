import React, {useState} from 'react'
import menu from './images/menu.jpg'
import user_icon from './images/user_icon.jpg'
import logo from './images/logo.jpg'

function Navbar(){
    const [openMenu, setOpenMenu] = useState(true)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <div>
          <div className="navbar">
            <img className="logo" src={logo} />
            <div>
              <h3 className="heir">heirbnb</h3>
            </div>
            <button className="host">Become a Host</button>
            <div>
              <button onClick={handleMenu} className="user_button"><img className="menu_image" src={menu} /><img className="user_icon" src={user_icon} /></button>
              <div className={openMenu? "off":"user_menu"}>
                <h4 className="menu_link_log">Log in</h4>
                <h4 className="menu_link">Sign up</h4>
                <hr/>
                <h4 className="menu_link">Host</h4>
            </div>
             </div>
          </div>
       </div>
    )
}

export default Navbar;