import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HostForm({currentUser}){
    const [userId, setUserId] = useState()
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [about, setAbout] = useState("")
    const [photo, setPhoto] = useState("")
    const [photos, setPhotos] = useState([...photo])
    const [amenities, setAmenities] = useState([])
    const [price, setPrice] = useState(1)
    const [errors, setErrors] = useState([])

    useEffect(() => {setUserId(currentUser.id)}, [HostForm]);

    const handleAddClick = (e) => {
        e.preventDefault(); 
        setPhotos([...photos, photo])
        setPhoto("")
    }

    const handleRemoveClick = (e) => {
        e.preventDefault();
        photos.pop()
        setPhotos([...photos])
    }

    const handleCheckboxChange = (e) => {
        let amenitiesList = [...amenities]
        if (e.target.checked){
            amenitiesList = [...amenities, e.target.value]
        } else {
            amenitiesList.splice(amenities.indexOf(e.target.value),1)
        }
        setAmenities(amenitiesList)
    }

    const handlePrice = (e) => {
        let integer = parseInt(e.target.value)
        setPrice(integer)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch("/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                location: location,
                about: about,
                photos: photos,
                amenities: amenities, 
                price: price,
                user_id: userId,
            })
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                console.log(data)})
            } else {
                response.json().then((errors) => setErrors(errors))
            }
        });
        setName("")
        setLocation("")
        setAbout("")
        setAmenities([])
        setPrice()
        setPhotos([])
    }

    return (
        <div className="login_window">
            <div className="host_form_div">
                <Link to="/"><button className="exit">X</button></Link>
                <h4 className="form_header">Host</h4>
                <hr/>
                <h3 className="form_welcome">Host your lands with Heirbnb</h3>
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="host_form_input_top"
                    autoComplete="off"
                    placeholder="Title of your lands"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <select className="select_form_input"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                    <option>Select region of your lands</option>
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
                    onChange
                </select>
                <h3 className="form_image_header">About</h3>
                <textarea
                    className="host_form_textbox"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    />
                <h3 className="form_image_header">Add images of your lands</h3>
                <input
                    type="text"
                    className="form_image_input"
                    autoComplete="off"
                    placeholder="Image of your lands"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                />
                <button className="host_form_add" onClick={handleAddClick}>Add</button>
                   <div className="form_images_div">
                    {photos.map ((photo,index) => {
                        return <img key={index} className="host_form_image" src={photo} />
                    })}
                    <div>
                        <button className={photos.length > 0? "exit_image": "off"} onClick={handleRemoveClick}>X</button>
                   </div>
                </div>
                <br />
                <h3 className="form_image_header">Attributes</h3>
                <div className="form_checkbox_div">
                    <input
                      type="checkbox"
                      value="Bath tub"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Bath tub
                    <input
                      type="checkbox"
                      value="Brazier"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Brazier
                    <input
                      type="checkbox"
                      value="Forge"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Forge
                    <input
                      type="checkbox"
                      value="Stable"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Stable
                    <input
                      type="checkbox"
                      value="Garden"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Garden
                    <input
                      type="checkbox"
                      value="Sept"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Sept
                    <input
                      type="checkbox"
                      value="Scullery"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Scullery
                    <input
                      type="checkbox"
                      value="Kennel"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Kennel
                    <input
                      type="checkbox"
                      value="Godswood"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Godswood
                    <input
                      type="checkbox"
                      value="Library"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Library
                    <input
                      type="checkbox"
                      value="Training Yard"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Training Yard
                    <input
                      type="checkbox"
                      value="Private Scullery"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Private Scullery
                    <input
                      type="checkbox"
                      value="Crypt"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Crypt
                    <input
                      type="checkbox"
                      value="Maester"
                      onChange={handleCheckboxChange}
                      className="form_checkbox" 
                        />Maester
                </div>
                <h3 className="form_image_header">Cost</h3>
                <div className="host_form_cost">
                    <input
                        type="number"
                        className="host_form_cost_input"
                        onChange={handlePrice}
                        value={price}
                        min="1"
                        max="99999"
                          /> Silver Stags per night
                </div>
                <button type="submit" className="proceed_button_host">Proceed</button>
                </form>
                <div className="space_div"></div>
            </div>
        </div>
    )
}

export default HostForm;