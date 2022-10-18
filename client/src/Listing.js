import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";


function Listing({currentUser}) {
    const [displayListing, setDisplayListing] = useState()
    const [editListing, setEditListing] = useState(false)

    let listingId = useParams()
    let displayId = parseInt(listingId.listingID)

    useEffect(() => {
        fetch(`/listings/${displayId}`).then((response) => {
            if (response.ok) {
              response.json().then((listing) => setDisplayListing(listing));
            } else {

            }
          })
        }, []);

    const ratingsAverage = displayListing? Math.round((displayListing.reviews.map(review => review.rating).reduce((s,n) => s + n, 0) /displayListing.reviews.length)* 100)/100 : 0

    const handleEdit = () => {
        setEditListing(!editListing)
    }

    return (
        displayListing ? 
            <div className="listing_profile">
                <div className="listing_profile_header">
                    <h1 className="listing_profile_name">{displayListing.name}</h1>
                </div>
                <div className="listing_profile_subheaders">
                    <h4 className="subheader">★ {displayListing.reviews.length > 0 ? ratingsAverage : 5} ·</h4>
                    <h4 className="subheader">{displayListing.reviews.length} reviews ·</h4>
                    <h4 className="subheader">{displayListing.listingLocation}</h4>
                </div>
                    <Link to={`/listings/${displayListing.id}/edit_listing`} state={displayListing} className="link"><p onClick={handleEdit} className={displayListing.user.id === currentUser.id? "edit_profile" : "off"}>Edit Listing</p></Link>
                <div className="listing_profile_photos">
                    <div className="listing_profile_photos_main">
                        <img alt="listing" className="profile_photo_one" src={displayListing.photos[0]}/>
                    </div>
                    <div className="listing_profile_photos_other">
                        <img alt="listing" className="profile_photo_two" src={displayListing.photos[1]}/>
                        <img alt="listing" className="profile_photo_three" src={displayListing.photos[2]}/>
                        <img alt="listing" className="profile_photo_four" src={displayListing.photos[3]}/>
                        <img alt="listing" className="profile_photo_five" src={displayListing.photos[4]}/>
                    </div>
                </div>
                <div className="listing_profile_info">
                    <p className="listing_profile_name">Rooms hosted by {displayListing.user.name}</p>
                    <Link to={`/users/${displayListing.user.id}/profile`} className="card_link">
                    <img className="listing_profile_user_image" src={displayListing.user.photo} />
                    </Link>
                </div>
                <div className="listing_profile_about">
                    <p className="listing_profile_name">About</p>
                    <p className="profile_about">{displayListing.about}</p>
                </div>
                <div className="listing_profile_amenities">
                    <p className="listing_profile_name">Amenities</p>
                    <div className="profile_amenities">
                        {displayListing.amenities.map((amenity) => {
                            return <h4 className="listing_profile_amenity">⦁ {amenity}</h4>
                        })}
                    </div>
                </div>
                <p className="listing_profile_name">★{displayListing.reviews.length > 0 ? ratingsAverage: 5} ⦁ {displayListing.reviews.length} reviews</p>
                <Link to={`/listings/${displayListing.id}/add_review`} className="link"><p className="add_review">Add review</p></Link>
                <div className="listing_profile_reviews">
                    {displayListing.reviews.map((review) => {
                        return <div className="listing_profile_review">
                                    <div className="review_header">
                                    <Link to={`/users/${displayListing.user.id}/profile`} className="card_link">
                                    <img className="review_photo" src={review.user.photo}/>
                                    </Link>
                                    <p className="review_name">{review.user.name}</p>
                                    </div>
                                    <p>{review.body}</p>
                                </div>
                    })}
                </div>  
            </div> : <h1>Listing Loading</h1>
        )
    
    }

export default Listing;