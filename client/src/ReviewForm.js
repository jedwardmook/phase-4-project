import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function ReviewForm({currentUser}){
    const [reviewListing, setReviewListing] = useState()
    const [rating, setRating] = useState(1)
    const [body, setBody] = useState("")
    const [listing_id, setListing_id] = useState()
    const [user_id, setUser_id] = useState()
    const [errors, setErrors] = useState([])
    
    let navigate = useNavigate()
    let listingId = useParams()
    let reviewListingId = parseInt(listingId.listingID)

    useEffect(() => {
        fetch(`/listings/${reviewListingId}`).then((response) => {
            if (response.ok) {
              response.json().then((listing) => setReviewListing(listing));
            } else {

            }
          })
        }, [reviewListingId]);

    useEffect(() => {setListing_id(reviewListingId)})
    useEffect(() => {setUser_id(currentUser.id)})

    const handleRating = (e) => {
        let integer = parseInt(e.target.value)
        setRating(integer)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                listing_id,
                body, 
                rating,
                user_id
            })
        }).then((response) => {
            if (response.ok) {
                console.log(response);
            } else {
                console.log(response)
                setErrors(response)
            }
            });
        setBody("")
        navigate(`/listings/${reviewListingId}`) 
    }

return (
    <div className="login_window">
        <div className="review_div">
        <Link to="/"><button className="exit">X</button></Link>
            <h4 className="form_header">Add your review</h4>
            <hr/>
            {reviewListing?
            <div className="review_form_div">
                <div className="review_form_header_div">
                <img className="review_form_photo" src={reviewListing.photos[0]} />
                <h3 className="review_form_header">Review for {reviewListing.name}</h3>
                <h3 className="review_form_star">★</h3>
                </div>
                <div className="review_form_form_div">
                <form className="review_form_form">
                    <select className="review_form_select"
                        value={rating}
                        onChange={handleRating}
                    >
                        <option>{null}</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <textarea
                        className="review_form_textarea"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <button onClick={handleSubmit} className="proceed_button_review">Proceed</button>
                </form>
                </div>
                <h5 className="review_form_footer">Review by {currentUser.name}</h5>
            </div>: <h3>Review Loading</h3>}
        </div>
    </div>
)
}

export default ReviewForm;