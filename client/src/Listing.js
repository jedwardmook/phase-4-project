import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";

function Listing() {
    const [displayListing, setDisplayListing] = useState()
    
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


    return (
        displayListing ? 
            <div className="listing_profile">
                <div className="listing_profile_header">
                    <h1 className="listing_profile_name">{displayListing.name}</h1>
                </div>
                <div className="listing_profile_subheaders">
                    <h4 className="subheader">★{displayListing.rating} ·</h4>
                    <h4 className="subheader">## reviews ·</h4>
                    <h4 className="subheader">{displayListing.location}</h4>
                </div>
                <div className="listing_profile_photos">
                    <div className="listing_profile_photos_main">
                        <img className="profile_photo_one" src={displayListing.photos[0]}/>
                    </div>
                    <div className="listing_profile_photos_other">
                        <img className="profile_photo_two" src={displayListing.photos[1]}/>
                        <img className="profile_photo_three" src={displayListing.photos[2]}/>
                        <img className="profile_photo_four" src={displayListing.photos[3]}/>
                        <img className="profile_photo_five" src={displayListing.photos[4]}/>
                    </div>
                </div>
                <div className="listing_profile_info">
                    <p className="listing_profile_name">Rooms hosted by {displayListing.user.name}</p>
                    <Link to={`/users/${displayListing.user.id}/profile`} className="card_link">
                    <img className="listing_profile_user_image" src={displayListing.user.photo} />
                    </Link>
                </div>
                <div className="listing_profile_amenities">
                    <p className="listing_profile_name">Amenities</p>
                    <div className="profile_amenities">
                        {displayListing.amenities.map((amenity) => {
                            return <h4 className="listing_profile_amenity">⦁ {amenity}</h4>
                        })}
                    </div>
                </div>
                <div className="listing_profile_reviews">
                <p className="listing_profile_name">Reviews</p>
                </div>
                
            </div> : <h1>Listing Loading</h1>
        )
    
    }

export default Listing;