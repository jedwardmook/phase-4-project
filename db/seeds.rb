User.destroy_all
User.reset_pk_sequence
Listing.destroy_all
Listing.reset_pk_sequence

puts "seeding"

    
    
    
    User.create(username: "first", password: "abc", password_confirmation: "abc", photo: "https://awoiaf.westeros.org/images/1/11/Aleksander_Karcz_my_mind_is_my_weapon.jpg" , name: "Tyrion Lannister", allegiance: "House Lannister", location: "Crownlands", bio: "A mind needs books like a sword needs a whetstone, if it is to keep its edge. That is why I read so much.")
    User.create(username: "second", password: "def", password_confirmation: "def", photo: "https://awoiaf.westeros.org/images/e/e4/Euron-mike-hallstein-infobox.jpg", name: "Euron Greyjoy", allegiance: "House Greyjoy", location: "Iron Islands", bio: "I don't mock the Drowned God - I am the Drowned God. From Oldtown to Qarth, when men see my sails...they pray." )

    winterfell = Listing.create(location: "The North", user_id: 1, rating: 0)
    winterfell.photos.attach(io: File.open(Rails.root.join('client/src/images/listing_images/winterfell1.webp')),
        filename: 'winterfell1.webp')
    Listing.create(location: "Crownlands", user_id: 2, rating: 5)

puts "finished seeding!"