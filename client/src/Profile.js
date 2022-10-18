import React, {useEffect, useState} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import user_icon_lrg from './images/user_icon_lrg.jpg'


function Profile({setCurrentUser,currentUser}){
    const [profileUser, setProfileUser] = useState()
    const [editProfile, setEditProfile] = useState(false)


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
        }, [Profile]);

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
                <p className="attribute">{profileUser.allegiance? profileUser.allegiance : "Allegiance"}</p>
                <div className={currentUser.id === displayUser? "show": "off"}>
                    <Link to={`/users/${currentUser.id}/edit_profile`} state={profileUser} className="link"><p onClick={handleEditForm} className="edit_profile">Edit profile</p></Link>
                </div>
                <br/>
                <hr />
                <p className="attribute">About</p>
                <p>{profileUser.bio}</p>
                <hr/>
                <p className="attribute">Location</p>
                <p>{profileUser.location}</p>
                <hr/>
                <br/>
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
            </div>
        </div> : <h1>Profile loading</h1>
    )
}

export default Profile;