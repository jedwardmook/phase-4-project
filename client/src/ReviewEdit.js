import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ReviewEdit({currentUser}){
    const location = useLocation();
    const state = location.state
    const [rating, setRating] = useState(state.rating)
    const [body, setBody] = useState(state.body)
    const [listing_id, setListing_id] = useState(state.listing_id)
    const [user_id, setUser_id] = useState(state.user_id)
    const [errors, setErrors] = useState([])
    const [listing, setListing] = useState()
    const [reviewId, setReviewId] = useState(state.id)
    
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`/listings/${state.listing_id}`).then((response) => {
            if (response.ok) {
              response.json().then((listing) => setListing(listing));
            } else {

            }
          })
        }, [state]);


    const handleRating = (e) => {
        let integer = parseInt(e.target.value)
        setRating(integer)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/reviews/${reviewId}`, {
            method: "PATCH",
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
                navigate(`/users/${state.user_id}/profile`) 
            } else {
                response.json().then((errors) => setErrors(errors.errors));
            }
            });
    }

    function handleDeleteReview(){
        fetch(`/reviews/${reviewId}`, {
        method: "DELETE"
            }).then((response) =>{
                if (response.ok) {
                    console.log("deleted")
                }      
            });
            navigate(`/users/${state.user_id}/profile`)
    }

return (
    <div className="login_window">
        <div className="review_div_update">
        <Link to={`/users/${user_id}/profile`}><button className="exit">X</button></Link>
            <h4 className="form_header">Edit your review</h4>
            <hr/>
            {listing?
            <div className="review_form_div">
                <div className="review_form_header_div">
                <img className="review_form_photo" src={listing.photos[0]} />
                <h3 className="review_form_header">Review for {listing.name}</h3>
                <h3 className="review_form_star">★</h3>
                </div>
                <div className="review_form_form_div">
                <form className="review_form_form">
                    <select className="review_form_select"
                        value={rating}
                        onChange={handleRating}
                    >
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
                    <button onClick={handleSubmit} className="proceed_button_review">Update</button>
                    <p onClick={handleDeleteReview} className="review_delete_edit">Delete Review</p>
                </form>
                </div>
                <h5 className="review_form_footer">Review by {currentUser.name}</h5>
                <div className={errors? "review_errors_div" : "off"}>
                    {errors.map ((error, index) => {
                        return <p key={index} className="error_p">{error}</p>
                    })}
                </div>
            </div>: <h3>Review Loading</h3>}
        </div>
    </div>
    )
}

export default ReviewEdit;