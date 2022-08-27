User.destroy_all
User.reset_pk_sequence

puts "seeding"
    
    User.create(username: "first", password: "abc", password_confirmation: "abc")
    User.create(username: "second", password: "def", password_confirmation: "def")

puts "finished seeding!"