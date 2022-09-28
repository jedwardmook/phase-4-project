import React, { useState, useEffect } from "react";

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

    


    const listingsToShow = listings.map(listing => {
      return (
          <div className="listing_card">
              <img className="listing_cover_img" src={listing.photos[0]} />
              <div className="card_header">
              <h4 className="card_name">{listing.name}</h4>
              <h4 className="card_rating">★{listing.rating}</h4>
            </div>
            <h4 className="card_location">{listing.location}</h4>
            <h4 className="card_price"><strong>{listing.price}</strong> night</h4>
          </div>
          )
    })

    return (
        <div className="listings_div">
            {listingsToShow}
        </div>
    )
}

export default ListingsContainer;