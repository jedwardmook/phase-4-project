User.destroy_all
User.reset_pk_sequence
Listing.destroy_all
Listing.reset_pk_sequence
Review.destroy_all
Review.reset_pk_sequence

puts "seeding"

    
    
    
    User.create(username: "first", password: "abc", password_confirmation: "abc", photo: "https://awoiaf.westeros.org/images/1/11/Aleksander_Karcz_my_mind_is_my_weapon.jpg" , name: "Tyrion Lannister", allegiance: "House Lannister", location: "Crownlands", bio: "A mind needs books like a sword needs a whetstone, if it is to keep its edge. That is why I read so much.")
    User.create(username: "second", password: "def", password_confirmation: "def", photo: "https://awoiaf.westeros.org/images/e/e4/Euron-mike-hallstein-infobox.jpg", name: "Euron Greyjoy", allegiance: "House Greyjoy", location: "Iron Islands", bio: "I don't mock the Drowned God - I am the Drowned God. From Oldtown to Qarth, when men see my sails...they pray." )

    Listing.create(
        name: "Winterfell", 
        location: "The North", 
        user_id: 1, 
        photos: ["https://awoiaf.westeros.org/images/f/ff/Lino_Drieghe_Winterfell.JPG", 
            "https://awoiaf.westeros.org/images/c/cb/Mariusz_Gandzell_Gates_of_Winterfell.png", 
            "https://awoiaf.westeros.org/images/c/cb/Winterfell_throne_by_MarcSimonetti.jpg", 
            "https://awoiaf.westeros.org/images/d/d3/Winterfell_by_feliche.jpg", 
            "https://awoiaf.westeros.org/images/a/ac/Ted_Nasmith_A_Song_of_Ice_and_Fire_Winterfell.jpg"], 
        price: 200,
        amenities: ["Scullery", "Chamber Pot","Scullery", "Chamber Pot","Scullery", "Chamber Pot"])
    Listing.create(name: "The Red Keep", location: "Crownlands", user_id: 2, photos: ["https://awoiaf.westeros.org/images/thumb/a/a1/Red_Keep_at_Kings_Landing%2C_Ted_Nasmith.jpg/900px-Red_Keep_at_Kings_Landing%2C_Ted_Nasmith.jpg"], price: 600,
        amenities: [])

    Review.create(rating: 4, body: "This place wasn't bad, but there were flies all over.", user_id: 1, listing_id: 1)
    Review.create(rating: 3, body: "This place wasn't kind of bad, but there were more flies all over.", user_id: 1, listing_id: 1)
    Review.create(rating: 1, body: "This place was bad. Don't go here. Too cold", user_id: 2, listing_id: 1)
    Review.create(rating: 5, body: "Loved it here. BIG CITY!", user_id: 2, listing_id: 2)
    
puts "finished seeding!"