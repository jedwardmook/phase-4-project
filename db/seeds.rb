puts "seeding"
User.create(username: "Marena", password: "abc", password_confirmation: "abc", house_affiliation: "Stark", image: "image", bio: "A bio")

puts "finished seeding!"