import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function ListingsContainer() {
    const [listings, setListings] = useState([])

    useEffect(() =>{
        fetch("/listings").then((response) => {
          if (response.ok) {
            response.json().then((listings) => setListings(listings));
          } else {

          }
        })
      }, []);
    
    
    const listingsToShow = listings.map((listing, index) => {
      return (
        <Link key={index} to={`/listings/${listing.id}`} className="card_link">
          <div className="listing_card">
              <img className="listing_cover_img" src={listing.photos[0]} />
              <div className="card_header">
                <h4 className="card_name">{listing.name}</h4>
                <h4 className="card_rating">★{Math.round((listing.reviews.map(review => review.rating).reduce((s,n) => s + n, 0) /listing.reviews.length)* 100)/100}</h4>
              </div>
            <h4 className="card_location">{listing.location}</h4>
            <h4 className="card_price"><strong>{listing.price}</strong> night</h4>
          </div>
          </Link>
          )
    })

    return (
        <div className="listings_div">
            {listingsToShow}
        </div>
    )
}

export default ListingsContainer;