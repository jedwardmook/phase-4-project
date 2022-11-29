import React from "react";
import { Link} from "react-router-dom";

function LoggedInUser({currentUser}){

    return(
        <div className="profile">
        <div className="info_div">
        <div className="photo_div">
            <img className="profile_image" src={currentUser.photo? currentUser.photo : ""} alt="Profile"></img>
        </div>
            <p className="hello">Hi, I'm {currentUser.name? currentUser.name : "a new user"}</p>
            <p className="attribute">{currentUser.allegiance? currentUser.allegiance : "Allegiance"}</p>
            <div className="show">
                <Link to="/my_profile/edit_profile" state={currentUser} className="link"><p className="edit_profile">Edit profile</p></Link>
            </div>
            <br/>
            <hr />
            <p className="attribute">About</p>
            <p>{currentUser.bio}</p>
            <hr/>
            <p className="attribute">Location</p>
            <p>{currentUser.location}</p>
            <hr/>
            <br/>
            <br/>
            <p className="attribute">★ {currentUser.listings.length > 0? currentUser.listings.length: 0} listings reviewed by me</p>
            {/* {currentUser.hosts.map ((host, index) => {
                return <div key={index}>{host.listings.map ((listing, index) => {
                            return <Link to={`/listings/${listing.id}`} className="link"><div className="profile_reviews" key={index}>
                                        <img className="profile_review_photo" src={listing.photos[0]} alt="listing" /> 
                                        <h4 className="profile_host_name">{listing.name}</h4>        
                                    </div></Link>})}
                                    <p className="profile_review_location">Lord: {host.name}</p>
                                    {host.listing_reviews.map ((listing_review, index) => {
                                        if (listing_review.user_id === currentUser.id)
                                            return (
                                            <div key={index}>
                                                <p  className="profile_review_review">"{listing_review.body}"</p>
                                                <div className={listing_review.user_id === currentUser.id? "show" : "off" }>
                                                    <Link to={`edit_review/${listing_review.id}`} state={listing_review} className="link"><p className="edit_profile">Edit Review</p></Link>
                                                </div>
                                            </div>
                                            )
                                        })}
                        </div> })} */}
        {currentUser.listings.map ((listing) => {
            return (
            <p>{listing.name}</p>
            )
        })
        }
    </div>
    </div>
    )
}

export default LoggedInUser