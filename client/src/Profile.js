import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import user_icon_lrg from './images/user_icon_lrg.jpg'

function Profile({setCurrentUser,currentUser}){
    const [profileUser, setProfileUser] = useState()
    const [editProfile, setEditProfile] = useState(false)
    const [updateImage, setUpdateImage] = useState(false)
    const [errors, setErrors] = useState(null)
    const [name, setName] = useState([])
    const [allegiance, setAllegiance] = useState([])
    const [bio, setBio] = useState([])
    const [location, setLocation] = useState([])
    const [photo, setPhoto] = useState([])

    let navigate = useNavigate()
    let userID = useParams()
    const displayUser = parseInt(userID.userID)

    useEffect(() => {
        fetch(`/users/${displayUser}`).then((response) => {
            if (response.ok) {
              response.json().then((user) => setProfileUser(user));
            } else {

            }
          })
        }, []);

    function handlePatch() {
        fetch(`/users/${displayUser}`, { 
            method: "PATCH",  
            headers: {    
                "Content-type": "application/json"  
            },  
            body: JSON.stringify({    
                name: name,
                allegiance: allegiance,
                bio: bio,
                location: location,
                photo: photo,
            })
        }) 
            .then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    setProfileUser(user);
                    });
            } else {
                response.json().then((errors) => console.log(errors));
            }
        });
        setEditProfile(!editProfile)
    }

    
    const handleEditForm = () => {
        setEditProfile(!editProfile)
    }

    const handleUpdateImage = () => {
        setUpdateImage(!updateImage)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeAllegiance = (e) => {
        setAllegiance(e.target.value)
    }

    const handleChangeBio = (e) => {
        setBio(e.target.value)
    }

    const handleChangeLocation = (e) => {
        setLocation(e.target.value)
    }

    const handleChangePhoto = (e) => {
        setPhoto(e.target.value)
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
        profileUser ?
        <div className="profile">
            <div className="info_div">
                <p className="hello">Hi, I'm {profileUser.name? profileUser.name : "a new user"}</p>
                <input
                    type="textarea"
                    placeholder="Name"
                    value={name}
                    className={editProfile? "edit_location_input": "off"}
                    onChange={handleChangeName}
                />
                <p className="attribute">{profileUser.allegiance? profileUser.allegiance : "Allegiance"}</p>
                <input
                    type="textarea"
                    placeholder="Change allegiance"
                    value={allegiance}
                    className={editProfile? "edit_location_input": "off"}
                    onChange={handleChangeAllegiance}
                />
                <div className={currentUser.id === displayUser? "show": "off"}>
                    <p onClick={handleEditForm} className="edit_profile">Edit profile</p>
                </div>
                <br/>
                <hr />
                <p className="attribute">About</p>
                <p>{profileUser.bio}</p>
                <textarea
                    type="textarea"
                    value={bio}
                    className={editProfile? "edit_bio_input": "off"}
                    onChange={handleChangeBio}
                />
                <hr/>
                <p className="attribute">Location</p>
                <p>{profileUser.location}</p>
                <input
                    type="textarea"
                    placeholder=""
                    value={location}
                    className={editProfile? "edit_location_input": "off"}
                    onChange={handleChangeLocation}
                />
                <hr/>
                <br/>
                <div className={editProfile? "changes_div" : "off"}>
                    <p onClick={handleEditForm} className={editProfile? "edit_profile" : "off"}>Cancel</p>
                    <button onClick={handlePatch} className={editProfile? "save_changes" : "off"}>Save</button>
                </div>
                <br/>
                <p className="attribute">★ {profileUser.reviews.length > 0? profileUser.reviews.length: 0} reviews by me</p>
                    {profileUser.reviews.map((review) => {
                        return  <div className="profile_reviews">
                                    <div className="profile_review_header">
                                        <img className="profile_review_photo" src={review.listing.photos[0]} />
                                        <p className="profile_review_listing">{review.listing.name}</p>
                                        <p className="profile_review_location">{review.listing.location}</p>
                                    </div>
                                    <p>{review.body}</p>
                                </div>
                    })}
                <div className={currentUser.id === displayUser? "show": "off"}>
                    <button onClick={handleLogOut}>Sign out</button>
                </div>
            </div>
            <div className="photo_div">
                <img className="profile_image" src={profileUser.photo? profileUser.photo : user_icon_lrg} alt="Profile"></img>
                <div className={currentUser.id === displayUser? "show": "off"}>
                    <p onClick={handleUpdateImage} className="edit_profile">Update photo</p>
                </div>
                <input
                    type="text"
                    placeholder="Add image link"
                    value={photo}
                    className={updateImage? "update_image_input" : "off"}
                    onChange={handleChangePhoto}
                />
            </div>
        </div> : <h1>Profile loading</h1>
    )
}

export default Profile;