import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import user_icon_lrg from './images/user_icon_lrg.jpg'

function Profile({setCurrentUser,currentUser}){
    const [editProfile, setEditProfile] = useState(false)
    const [updateImage, setUpdateImage] = useState(false)
    const [name, setName] = useState("")
    console.log(currentUser)

    let navigate = useNavigate()
    const handleEditForm = () => {
        setEditProfile(!editProfile)
    }

    const handleUpdateImage = () => {
        setUpdateImage(!updateImage)
    }
    
    function handleLogOut(){
        fetch("/sessions/1", {
        method: "DELETE"
    }).then((response) =>{
        if (response.ok) {
            setCurrentUser([]);
            navigate('/');
        }
    });
    }

    return (
        <div className="profile">
            <div className="info_div">
                <p className="hello">Hi, I'm {currentUser.name? currentUser.name : "a new user"}</p>
                <input
                    type="textarea"
                    placeholder="Name"
                    value={name}
                    className={editProfile? "edit_location_input": "off"}
                    onChange={() => setName()}
                />
                <p className="attribute">{currentUser.allegiance}</p>
                <p onClick={handleEditForm} className="edit_profile">Edit profile</p>
                <br/>
                <hr />
                <p className="attribute">About</p>
                <p>{currentUser.bio}</p>
                <textarea
                    type="textarea"
                    className={editProfile? "edit_bio_input": "off"}
                />
                <hr/>
                <p className="attribute">Location</p>
                <p>{currentUser.location}</p>
                <input
                    type="textarea"
                    placeholder=""
                    className={editProfile? "edit_location_input": "off"}
                />
                <hr/>
                <br/>
                <p className={editProfile? "edit_profile" : "off"}>Cancel</p>
                <p className="attribute">Reviews</p>
                <button onClick={handleLogOut}>Sign out</button>
            </div>
            <div className="photo_div">
                <img className="profile_image" src={user_icon_lrg} alt="Profile photo"></img>
                <p onClick={handleUpdateImage} className="edit_profile">Update photo</p>
                <input
                    type="text"
                    placeholder="Add image link"
                    className={updateImage? "update_image_input" : "off"}
                />
            </div>
            

        </div>
    )
}

export default Profile;