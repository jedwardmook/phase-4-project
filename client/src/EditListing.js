import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";


function EditListing({currentUser}){
    const location = useLocation();
    const state = location.state;
    let navigate = useNavigate()
    const [editName, setEditName] = useState(state.name)
    const [editLocation, setEditLocation] = useState(state.location)
    const [newPhoto, setNewPhoto] = useState("")
    const [newPhotos, setNewPhotos] = useState([...newPhoto])
    const [allPhotos, setAllPhotos] = useState([...state.photos])
    const [editAbout, setEditAbout] = useState(state.about)
    const [editAmenities, setEditAmenities] = useState([])
    const [editPrice, setEditPrice] = useState(parseInt(state.price))
    const [errors, setErrors] = useState([])

    const handleAddClick = (e) => {
        e.preventDefault(); 
        setNewPhotos([...newPhotos, newPhoto])
        allPhotos.push(newPhoto)
        setNewPhoto("")
    }
    
    const handleRemoveClick = (e) => {
        e.preventDefault();
        state.photos.pop()
        setAllPhotos([...newPhotos, state.photos])
    }

    const handleRemoveNewClick = (e) => {
        e.preventDefault();
        newPhotos.pop()
        setAllPhotos([...newPhotos, state.photos])
    }

    const handleCheckboxChange = (e) => {
        let amenitiesList = [...editAmenities, state.amenities]
        if (e.target.checked){
            amenitiesList = [...editAmenities, e.target.value]
        } else {
            amenitiesList.splice(editAmenities.indexOf(e.target.value),1)
        }
        setEditAmenities(amenitiesList)
    }

    const handlePrice = (e) => {
        let integer = parseInt(e.target.value)
        setEditPrice(integer)
    }

    function handlePatch(e) {
        e.preventDefault()
        setErrors([])
        fetch(`/listings/${state.id}`, { 
            method: "PATCH",  
            headers: {    
                "Content-type": "application/json"  
            },  
            body: JSON.stringify({    
                name: editName,
                location: editLocation,
                photos: allPhotos.flat(),
                about: editAbout,
                amenities: editAmenities,
                price: editPrice,
            })
        }) 
            .then((response) => {
            if (response.ok) {
                response.json().then((listing) => {
                    console.log(listing);
                    });
            } else {
                response.json().then((errors) => console.log(errors));
            }
        });
        navigate(`/listings/${state.id}`)
    }

    return (
        <div className="login_window">
            <div className="edit_listing_form_div">
                <Link to={`/listings/${state.id}`}><button className="exit">X</button></Link>
                <h4 className="form_header">Edit listing</h4>
                <hr/>
                <div className="profile_review_header">
                    <h1 className="edit_listing_profile_name">Name:</h1>
                    <input
                        type="text"
                        className="edit_listing_top_input"
                        autoComplete="off"
                        placeholder= {state.name}
                        value= {editName}
                        onChange={(e) => setEditName(e.target.value)}
                    />
                </div>
                <div className="profile_review_header">
                    <h1 className="edit_listing_profile_name">Location:</h1>
                    <select
                        className="edit_listing_bottom_input"
                        value= {editLocation}
                        onChange={(e) => setEditLocation(e.target.value)}>
                        <option>{state.location}</option>
                        <option>The Gift</option>
                        <option>The North</option>
                        <option>Iron Islands</option>
                        <option>WesterLands</option>
                        <option>Riverlands</option>
                        <option>The Vale of Arryn</option>
                        <option>Crownlands</option>
                        <option>The Reach</option>
                        <option>Stormlands</option>
                        <option>Dorne</option>
                    </select>
                </div>
                <br/>
                <br/>
                <div className="profile_review_header">
                <h1 className="edit_listing_profile_name">Current images:</h1>
                    {state.photos.map ((photo,index) => {
                        return <img key={index} className="host_form_image" src={photo} />
                    })}
                    <div>
                            <button className={state.photos.length > 0? "exit_image": "off"} onClick={handleRemoveClick}>X</button>
                    </div>
                </div>
                {newPhotos.length > 0 ? 
                    <div className="profile_review_header">
                        <h1 className="edit_listing_profile_name">New images:</h1>
                        {newPhotos.map ((photo,index) => {
                        return <img key={index} className="host_form_image" src={photo} />
                        })}
                        <div>
                            <button className={newPhotos.length > 0? "exit_image": "off"} onClick={handleRemoveNewClick}>X</button>
                        </div>
                </div>:<div></div>}
                <div className="profile_review_header">
                <br/>
                <input
                    type="text"
                    className="edit_listing_photo_input"
                    autoComplete="off"
                    placeholder="Image of your lands"
                    value={newPhoto}
                    onChange={(e) => setNewPhoto(e.target.value)}
                /><button className="host_form_add" onClick={handleAddClick}>Add</button>
                </div>
                <div className="profile_review_header">
                    <h1 className="edit_listing_profile_name">About:</h1>
                    <textarea
                    type="text"
                    className="edit_listing_about_input"
                    autoComplete="off"
                    placeholder="About your lands"
                    value={editAbout}
                    onChange={(e) => setEditAbout(e.target.value)}
                    />
                </div>
                <br/>
                <div className="profile_review_header">
                    <h1 className="edit_listing_profile_name">Amenities:</h1>
                    <div className="edit_listing_amenities_div">
                        <input
                        type="checkbox"
                        value="Bath tub"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Bath tub
                        <input
                        type="checkbox"
                        value="Brazier"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Brazier
                        <input
                        type="checkbox"
                        value="Forge"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Forge
                        <input
                        type="checkbox"
                        value="Stable"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Stable
                        <input
                        type="checkbox"
                        value="Garden"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Garden
                        <input
                        type="checkbox"
                        value="Sept"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Sept
                        <input
                        type="checkbox"
                        value="Scullery"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Scullery
                        <input
                        type="checkbox"
                        value="Kennel"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Kennel
                        <input
                        type="checkbox"
                        value="Godswood"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Godswood
                        <input
                        type="checkbox"
                        value="Library"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Library
                        <input
                        type="checkbox"
                        value="Training Yard"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Training Yard
                        <input
                        type="checkbox"
                        value="Private Scullery"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Private Scullery
                        <input
                        type="checkbox"
                        value="Crypt"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Crypt
                        <input
                        type="checkbox"
                        value="Maester"
                        onChange={handleCheckboxChange}
                        className="edit_checkbox" 
                        />Maester
                    </div>
                </div>
                <br/>
                <br/>
            <div className="profile_review_header">
                <h1 className="edit_listing_profile_name">Price:</h1>
                    <input
                      type="number"
                      className="edit_listing_price_input"
                      onChange={handlePrice}
                      value={editPrice}
                      min="1"
                      max="99999"
                      /><p className="edit_listing_price_p">Silver Stags per night</p>
            </div>
                <button type="submit" onClick={handlePatch} className="proceed_button_host">Proceed</button>
                <div className="space_div"></div>
            </div>
        </div>
    )
}

export default EditListing