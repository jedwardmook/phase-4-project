import React, { useState } from "react";
import {  Link, useNavigate, useLocation } from "react-router-dom";

function EditProfile({handleLogOut, setCurrentUser, currentUser}){
    const location = useLocation();
    const state = location.state;
    const [editName, setEditName] = useState(state.name)
    const [editAllegiance, setEditAllegiance] = useState(state.allegiance)
    const [editPhoto, setEditPhoto] = useState(state.photo)
    const [editLocation, setEditLocation] = useState(state.location)
    const [editAbout, setEditAbout] = useState(state.bio)
    const [errors, setErrors] = useState([])
    let navigate= useNavigate()
 
    function handlePatch(e) {
        e.preventDefault()
        setErrors([])
        fetch(`/users/${currentUser.id}`, { 
            method: "PATCH",  
            headers: {    
                "Content-type": "application/json"  
            },  
            body: JSON.stringify({    
                name: editName,
                allegiance: editAllegiance,
                bio: editAbout,
                location: editLocation,
                photo: editPhoto,
            })
        }) 
            .then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    setCurrentUser(user);
                    });
            } else {
                response.json().then((errors) => console.log(errors));
            }
        });
        navigate(`/users/${currentUser.id}/profile`)
    }

    function handleDeleteUser(){
        fetch(`/users/${currentUser.id}`, {
        method: "DELETE"
            }).then((response) =>{
                if (response.ok) {
                    handleLogOut()
                }      
            });
            navigate("/")
    }

    return (
        <div className="login_window">
            <div className="edit_profile_div">
            <Link to={`/users/${currentUser.id}/profile`}><button className="exit">X</button></Link>
                <h4 className="form_header">Edit Profile</h4>
                <hr/>
                <div className="profile_review_header">
                    <h1 className="edit_listing_profile_name">Name:</h1>
                    <input
                        type="text"
                        className="edit_user_top_input"
                        autoComplete="off"
                        placeholder= "New name"
                        value= {editName}
                        onChange={(e) => setEditName(e.target.value)}
                    />
                </div>
                <div className="profile_review_header">
                    <h1 className="edit_listing_profile_name">Allegiance:</h1>
                    <input
                        type="text"
                        className="edit_user_bottom_input"
                        autoComplete="off"
                        placeholder= "New allegiance"
                        value= {editAllegiance}
                        onChange={(e) => setEditAllegiance(e.target.value)}
                    />
                </div>
                <div className="photo_div">
                    <img className="edit_profile_image" src={editPhoto} alt="Profile" />
                    <input
                    type="text"
                    placeholder="Add image url"
                    value={editPhoto}
                    className="update_image_input"
                    onChange={(e) => setEditPhoto(e.target.value)}
                    />
                    <h1 className="edit_user_profile_name">Image:</h1>
                </div>
                <br/>
                <div className="profile_review_header">
                    <h1 className="edit_listing_profile_name">Location:</h1>
                    <input
                        type="text"
                        className="edit_user_input"
                        autoComplete="off"
                        placeholder= "New location"
                        value= {editLocation}
                        onChange={(e) => setEditLocation(e.target.value)}
                    />
                </div>
                <br/>
                <div className="profile_review_header">
                    <h1 className="edit_listing_profile_name">About:</h1>
                    <textarea
                        type="text"
                        className="edit_user_about_input"
                        autoComplete="off"
                        placeholder= "New about"
                        value= {editAbout}
                        onChange={(e) => setEditAbout(e.target.value)}
                    />
                </div>
                <button onClick={handlePatch} className="save_changes">Save</button>
                <p onClick={handleDeleteUser} className="delete_profile">Delete user</p>
            </div>
        </div>
    )
}

export default EditProfile