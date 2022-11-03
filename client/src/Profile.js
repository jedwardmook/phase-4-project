import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import user_icon_lrg from './images/user_icon_lrg.jpg'



function Profile({currentUser}){
    const [profileUser, setProfileUser] = useState()
    const [editProfile, setEditProfile] = useState(false)

    let userID = useParams()
    const displayUser = parseInt(userID.userID)

    useEffect(() => {
        fetch(`/users/${displayUser}`).then((response) => {
            if (response.ok) {
              response.json().then((user) => setProfileUser(user));
            } else {
              console.log(response.json())
            }
          })
        }, []);


    const handleEditForm = () => {
        setEditProfile(!editProfile)
    }

    console.log(profileUser)

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
                <p className="attribute">★ {profileUser.hosts.length > 0? profileUser.hosts.length: 0} reviews by me</p>
                    {/* {profileUser.reviews.map((review) => {
                        return  <div className="profile_reviews">
                                    <div className="profile_review_header">
                                        <img className="profile_review_photo" src={review.listing.photos[0]} />
                                        <p className="profile_review_listing">{review.listing.name}</p>
                                        <p className="profile_review_location">{review.listing.location}</p>
                                    </div>
                                    <p>{review.body}</p>
                                </div>
                    })} */}
                {profileUser.hosts.map ((host, index) => {
                    return <div key={index}>{host.listings.map ((listing, index) => {
                                return <Link to={`/listings/${listing.id}`} className="link"><div className="profile_reviews" key={index}>
                                            <img className="profile_review_photo" src={listing.photos[0]} alt="listing" /> 
                                            <h4 className="profile_host_name">{listing.name}</h4>        
                                        </div></Link>})}
                                        <p className="profile_review_location">Lord: {host.name}</p>
                                        {host.listing_reviews.map ((listing_review, index) => {
                                            if (listing_review.user_id === profileUser.id)
                                                return (
                                                <div>
                                                    <p key={index} className="profile_review_review">"{listing_review.body}"</p>
                                                    {listing_review.user_id === displayUser? <p>Hello</p>: console.log("no")}
                                                </div>
                                                )
                                            })}
                            </div> })}
            </div>
            <div className="photo_div">
                <img className="profile_image" src={profileUser.photo? profileUser.photo : user_icon_lrg} alt="Profile"></img>
            </div>
        </div> : <h1>Profile loading</h1>
    )
}

export default Profile;