User.destroy_all
User.reset_pk_sequence
Listing.destroy_all
Listing.reset_pk_sequence
Review.destroy_all
Review.reset_pk_sequence
Host.destroy_all
Host.reset_pk_sequence

puts "seeding"

    
    Host.create(name: "Roose Bolton", listing_id: 1, image: "https://awoiaf.westeros.org/images/4/40/Roose_bolton_by_berghots.jpg")
    Host.create(name: "Tommen Baratheon", listing_id: 2, image: "https://awoiaf.westeros.org/images/d/d4/Tommen_Baratheon.jpg")
    Host.create(name: "Emmon Frey", listing_id: 3, image: "https://static.tvtropes.org/pmwiki/pub/images/cleos_frey_ffg_9960.jpg")
    Host.create(name: "Petyr Baelish", listing_id: 4, image: "https://awoiaf.westeros.org/images/a/a8/Knowledge_is_power_by_robotdelespacio.jpg")
    Host.create(name: "Euron Greyjoy", listing_id: 5, image: "https://awoiaf.westeros.org/images/e/e4/Euron-mike-hallstein-infobox.jpg")
    Host.create(name: "Damion Lannister", listing_id: 6, image: "https://awoiaf.westeros.org/images/1/14/Damion_Lannister.jpg")
    Host.create(name: "Mace Tyrell", listing_id: 7, image: "https://awoiaf.westeros.org/images/a/a5/Mace_TyrellLukasz_Jaskolski.png")
    Host.create(name: "Stannis Baratheon", listing_id: 8, image: "https://awoiaf.westeros.org/images/9/9f/Stannis_Melisandre_Lightbringer_Dragonstone.jpg")
    Host.create(name: "Doran Martell", listing_id: 9, image: "https://awoiaf.westeros.org/images/thumb/b/b8/Doran_martell_by_bellabergolts.jpg/700px-Doran_martell_by_bellabergolts.jpg")

    User.create(username: "first", password: "first", password_confirmation: "first", photo: "https://awoiaf.westeros.org/images/1/11/Aleksander_Karcz_my_mind_is_my_weapon.jpg" , name: "Tyrion Lannister", allegiance: "House Lannister", location: "Crownlands", bio: "A mind needs books like a sword needs a whetstone, if it is to keep its edge. That is why I read so much.")
    User.create(username: "second", password: "second", password_confirmation: "second", photo: "https://awoiaf.westeros.org/images/3/36/John_Picacio_Arya.jpg", name: "Arya Stark", allegiance: "House Stark", location: "The North", bio: "A girl has no 'about me'." )
    User.create(username: "third", password: "third", password_confirmation: "third", photo: "https://awoiaf.westeros.org/images/0/0f/NitenRiver_Runner.JPG", name: "Davos Seaworth", allegiance: "House Baratheon", location: "Crownlands", bio: "I would say my parts are mixed. Good and bad." )
    User.create(username: "fourth", password: "fourth", password_confirmation: "fourth", photo: "https://awoiaf.westeros.org/images/thumb/f/f6/Ardenbeckwithsamwelltarly.jpg/1346px-Ardenbeckwithsamwelltarly.jpg", name: "Samwell Tarly", allegiance: "Citadel", location: "Oldtown", bio: "Some call me a craven, others a slayer." )
    User.create(username: "fifth", password: "fifth", password_confirmation: "fifth", photo: "https://awoiaf.westeros.org/images/8/81/Magali_Villeneuve_JonSnowGhostpuppy.jpg", name: "Jon Snow", allegiance: "Night's Watch", location: "Castle Black", bio: "There's no shame in fear, my father told me, what matters is how we face it.")
    User.create(username: "sixth", password: "sixth", password_confirmation: "sixth", photo: "https://awoiaf.westeros.org/images/thumb/0/07/Brienne_by_quickreaver.jpg/600px-Brienne_by_quickreaver.jpg", name: "Brienne Tarth", allegiance: "Whoever honorable will have me", location: "Riverlands", bio: "Young or old, a true knight is sworn to protect those who are weaker than himself, or die in the attempt.")
    User.create(username: "seventh", password: "seventh", password_confirmation: "seventh", photo: "https://awoiaf.westeros.org/images/e/e2/Meera_reed_by_daenerys_mod.jpg", name: "Meera Reed", allegiance: "House Reed", location: "The North", bio: "Earth and water, soil and stone, oaks and elms and willows, they were here before us all and will still remain when we are gone.")
    User.create(username: "eighth", password: "eighth", password_confirmation: "eighth", photo: "https://awoiaf.westeros.org/images/d/db/Selmy_as_Arstan_Whitebeard.jpg", name: "Barristan Selmy", allegiance: "House Targaryen", location: "Dorne", bio: "Dying is easy, but victory comes hard.")
    User.create(username: "ninth", password: "ninth", password_confirmation: "ninth", photo: "https://awoiaf.westeros.org/images/a/a1/Bella_Bergolts_Melisandre.jpg", name: "Melisandre", allegiance: "Faith of R'hllor", location: "The Flames", bio: "The night is dark and full of terrors.")

    Listing.create(
        name: "Winterfell", 
        location: "The North", 
        host_id: 1, 
        about: "Located conveniently on the King's Road, Winterfell is the capital of the North. Once the seat of the traitorous Ned Stark, Roose Bolton now sits the throne of Winterfell. The castle complex sits in an expansive godswood atop a natural hot spring that heats the walls.",
        photos: ["https://awoiaf.westeros.org/images/f/ff/Lino_Drieghe_Winterfell.JPG", 
            "https://awoiaf.westeros.org/images/c/cb/Mariusz_Gandzell_Gates_of_Winterfell.png", 
            "https://awoiaf.westeros.org/images/c/cb/Winterfell_throne_by_MarcSimonetti.jpg", 
            "https://awoiaf.westeros.org/images/d/d3/Winterfell_by_feliche.jpg", 
            "https://awoiaf.westeros.org/images/a/ac/Ted_Nasmith_A_Song_of_Ice_and_Fire_Winterfell.jpg"], 
        price: 200,
        amenities: ["Scullery", "Stable", "Kennel", "Forge", "Crypt", "Sept", "Godswood", "Hot Spring", "Greenhouse"])
    
    Listing.create(
        name: "The Red Keep", 
        location: "Crownlands", 
        host_id: 2,
        about: "Built of pale red stone, the Red Keep's seven massive drum-towers overlook the mouth of Blackwater Rush. Home to the Iron Throne where Tommen Baratheon your king sits, The Red Keep is built on vast underground tunnels that house the relics of the kingdom.",
        photos: ["https://awoiaf.westeros.org/images/thumb/a/a1/Red_Keep_at_Kings_Landing%2C_Ted_Nasmith.jpg/900px-Red_Keep_at_Kings_Landing%2C_Ted_Nasmith.jpg",
            "https://awoiaf.westeros.org/images/2/22/Red_Keep.jpg",
            "https://awoiaf.westeros.org/images/thumb/1/18/The_iron_throne.jpg/600px-The_iron_throne.jpg",
            "https://awoiaf.westeros.org/images/thumb/9/98/Red_Keep_Dragon_Cellar_by_Kim_Pope.jpg/600px-Red_Keep_Dragon_Cellar_by_Kim_Pope.jpg",
            "https://qph.cf2.quoracdn.net/main-qimg-538c07062a22c1808e43f11f1a1f4d39-lq"], 
        price: 600,
        amenities: ["Granaries", "Stables", "Kennels", "Godswood", "Sept", "Pig yard", "Ports"])

    Listing.create(
        name: "Riverrun", 
        location: "Riverlands", 
        host_id: 3,
        about: "Located in the western riverlands, at the confluence of the Tumblestone and Red Fork rivers, Riverrun is protected by Emmon Frey.",
        photos: ["https://s.hdnux.com/photos/74/64/60/15944753/132/1200x0.jpg",
            "https://awoiaf.westeros.org/images/thumb/8/8d/Ted_Nasmith_A_Song_of_Ice_and_Fire_Riverrun.jpg/700px-Ted_Nasmith_A_Song_of_Ice_and_Fire_Riverrun.jpg",
            "https://awoiaf.westeros.org/images/4/4a/Riverrun_by_Feliche.jpg",
            "https://www.tednasmith.com/wp-content/uploads/2015/07/TN-Passing_the_Wheel_Tower.jpg"], 
        price: 350,
        amenities: ["Godswood", "Sept", "Stables", "Kennels", "Ports" ])

    Listing.create(
        name: "The Eryie", 
        location: "The Vale", 
        host_id: 4,
        about: "Situated in the Mountains of the Moon on a shoulder the Giant's Lance, several thousand feet above the valley below, The Eyrie is stewarded by Petyr Baelish. The castle is made of fine white stone with the sounds of Alyssa's Tears heard in the distance.", 
        photos: ["https://awoiaf.westeros.org/images/8/8f/The_Eyrie-TN.jpg",
            "https://awoiaf.westeros.org/images/thumb/f/f9/Thomas_Denmark_eyrie.jpg/600px-Thomas_Denmark_eyrie.jpg",
            "https://awoiaf.westeros.org/images/thumb/9/9f/LinoDrieghe_EyrieII.jpg/600px-LinoDrieghe_EyrieII.jpg",
            "https://awoiaf.westeros.org/images/thumb/c/c5/Gates_large.jpg/600px-Gates_large.jpg",
            "https://awoiaf.westeros.org/images/thumb/4/4e/Thomas_Denmark_the_moondoor.jpg/600px-Thomas_Denmark_the_moondoor.jpg"], 
        price: 350,
        amenities: ["Granary", "Sept"])

    Listing.create(
        name: "Pyke", 
        location: "Iron Islands", 
        host_id: 5,
        about: "Ruled by King Euron Greyjoy, ancient Pyke was originally built on a cliff jutting out into the sea, but over time the cliff has eroded, leaving the castle's keeps and towers standing on three barren islands and a dozen small stacks of rock, surrounded by water.",
        photos: ["https://awoiaf.westeros.org/images/0/04/Lino_Drieghe_Pyke.JPG",
            "https://awoiaf.westeros.org/images/thumb/f/f5/Pyke_by_Feliche.jpg/600px-Pyke_by_Feliche.jpg",
            "https://awoiaf.westeros.org/images/e/e2/Zippo514_Pyke.jpg",
            "https://awoiaf.westeros.org/images/thumb/9/9d/Pyke_HBO.jpg/600px-Pyke_HBO.jpg",
            "https://awoiaf.westeros.org/images/thumb/f/fe/The_iron_islands_by_reneaigner.jpg/600px-The_iron_islands_by_reneaigner.jpg"], 
        price: 250,
        amenities: ["Stable", "Kennel"])    

    Listing.create(
        name: "Casterly Rock", 
        location: "Westerlands",
        about: "The capital of the westerlands, Casterly Rock is on the ocean road and overlooks the harbor of Lannisport and the Sunset Sea. The Lannisters have ruled Casterly Rock since Lann the Clever tricked the Casterlys out of their castle and claimed it for himself. Damien Lannister is castellan of Casterly Rock being named by Cersei Lannister.", 
        host_id: 6, 
        photos: ["https://awoiaf.westeros.org/images/0/0e/Ted_Nasmith_A_Song_of_Ice_and_Fire_Casterly_Rock.jpeg",
            "https://awoiaf.westeros.org/images/thumb/7/72/Casterly_rock_by_feliche.jpg/800px-Casterly_rock_by_feliche.jpg",
            "https://cdnb.artstation.com/p/assets/images/images/014/592/825/large/eva-kedves-casterly-rock-as.jpg?1544622428",
            "https://static.wikia.nocookie.net/iron-throne-roleplay5113/images/4/4f/Casterly.jpg/revision/latest?cb=20170723123442",
            "https://i.redd.it/60dst6ew2qi21.png"], 
        price: 800,
        amenities: ["Godswood", "Sept", "Port", "Stables", "Gardens", "Golden Gallery"])

    Listing.create(
        name: "Highgarden", 
        location: "The Reach", 
        about: "Highgarden is the regional capital of the Reach, and the heart of chivalry in the Seven Kingdoms. It lies on the Mander where the ocean road meets the roseroad, making it an important crossroads. Mace Tyrell is the Lord of Highgarden.",
        host_id: 7, 
        photos: ["https://awoiaf.westeros.org/images/thumb/c/c7/Ted_Nasmith_A_Song_of_Ice_and_Fire_Highgarden.jpg/700px-Ted_Nasmith_A_Song_of_Ice_and_Fire_Highgarden.jpg",
            "https://awoiaf.westeros.org/images/thumb/2/27/Highgarden_by_feliche.jpg/900px-Highgarden_by_feliche.jpg",
            "https://i.pinimg.com/736x/2e/0b/4e/2e0b4e698ae8d1531351807863c1728d.jpg",
            "https://awoiaf.westeros.org/images/thumb/d/d7/Juan_Carlos_Barquet_Highgarden_II.jpg/700px-Juan_Carlos_Barquet_Highgarden_II.jpg",
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f198078-0814-4afc-8707-d95293be4e4c/d5yujfv-0dc3520b-eca7-459d-b799-c4a9cff5f248.jpg/v1/fill/w_1024,h_651,q_75,strp/highgarden_by_zippo514_d5yujfv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUxIiwicGF0aCI6IlwvZlwvOWYxOTgwNzgtMDgxNC00YWZjLTg3MDctZDk1MjkzYmU0ZTRjXC9kNXl1amZ2LTBkYzM1MjBiLWVjYTctNDU5ZC1iNzk5LWM0YTljZmY1ZjI0OC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JsBx4OfS6M-E_DvmZUhxFefvP4ttvviZ_Q8SisYTE6I"], 
        price: 700,
        amenities: ["Sept", "Godswood", "Stables", "Pleasure Boats", "Orchards", "Vineyards", "Briar Labyrinth", "Butterbumps the Fool"])

    Listing.create(
        name: "Storm's End", 
        location: "The Stormlands", 
        about: "One of the strongest castles in the realm, Storm's End is said to be protected by spells woven into its very walls that prevent magic from affecting it or passing through it. King Stannis Baratheon rules in Storm's End.",
        host_id: 8, 
        photos: ["https://awoiaf.westeros.org/images/thumb/7/7e/Loganfeliciano_storms_end.jpg/700px-Loganfeliciano_storms_end.jpg",
            "https://www.tednasmith.com/wp-content/uploads/2015/07/TN-Storms_End.jpg",
            "https://awoiaf.westeros.org/images/thumb/c/cb/Yoann_Boissonnet_Tower_LibraryIII.jpg/700px-Yoann_Boissonnet_Tower_LibraryIII.jpg",
            "https://awoiaf.westeros.org/images/thumb/8/8f/Storm_s_end_by_feliche.jpg/700px-Storm_s_end_by_feliche.jpg",
            "https://cdnb.artstation.com/p/assets/images/images/020/116/055/4k/madison-lederer-stormsend-final.jpg?1566423124"], 
        price: 300,
        amenities: ["Stables", "Scorched Godswood", "Granary", "Library"])

    Listing.create(
        name: "Sunspear", 
        location: "Dorne", 
        about: "Sunspear is a walled settlement, protected by three massive Winding Walls, encircling one another and containing miles of narrow alleys, hidden courts, and noisy bazaars. Prince Doran Martell heads the House Nymeros Martell at Sunspear.",
        host_id: 9, 
        photos: ["https://awoiaf.westeros.org/images/thumb/9/93/Ted_Nasmith_A_Song_of_Ice_and_Fire_Sunspear.jpg/700px-Ted_Nasmith_A_Song_of_Ice_and_Fire_Sunspear.jpg",
            "https://awoiaf.westeros.org/images/thumb/9/9f/Sunspear_by_jonathanguzi-d89ziph.jpg/700px-Sunspear_by_jonathanguzi-d89ziph.jpg",
            "https://awoiaf.westeros.org/images/thumb/0/08/Towerofthesuncbarquet.jpg/600px-Towerofthesuncbarquet.jpg",
            "https://awoiaf.westeros.org/images/e/e2/Cristi_Balanescu_Dorne.png",
            "https://external-preview.redd.it/bU7YpSIz4X8NoNrnIoSkVE2-52X5fXldS85JZlOT-EI.jpg?auto=webp&s=287f2d7303bdc5744952ca3f066daab8a61ec1fb"], 
        price: 500,
        amenities: ["Stables", "Sept", "Markets"])
        

    Review.create(rating: 1, body: "A lovely place for a family to tear itself apart. Spiders in the walls, and skeletons in every armorium.", user_id: 1, listing_id: 2)
    Review.create(rating: 5, body: "One never forgets where they were pushed into this world. Fond memories of brother here. Fonder memories of the brothels here.", user_id: 1, listing_id: 6)
    Review.create(rating: 2, body: "Once home to a girl's mother. Now a home to backstabbers.", user_id: 2, listing_id: 3)
    Review.create(rating: 3, body: "Once home to a girl's aunt. The girl was almost ransomed here and would have continued to have a name.", user_id: 2, listing_id: 4)
    Review.create(rating: 4, body: "Home to the true king of Westeros. That derseves a 5, but I did see a woman birth a murderous shadow here.", user_id: 3, listing_id: 8)
    Review.create(rating: 2, body: "I was born in Flea Bottom in The Red Keep's shadow. I have no love for the games played inside. They took my boys from me.", user_id: 3, listing_id: 2)
    Review.create(rating: 5, body: "As a boy, my mother would often visit Highgarden. A true place of beauty with a love for the living world around us.", user_id: 4, listing_id: 7)
    Review.create(rating: 3, body: "I've never seen it with my own eyes, but a place that births real heroes. It's a true shame what has happened here.", user_id: 4, listing_id: 1)
    Review.create(rating: 5, body: "The place I always called home with the people I called my family. It's gone now but the memories will always exist here like snow of winter. ", user_id: 5, listing_id: 1)
    Review.create(rating: 3, body: "Theon was a true brother to me. He did what he thought he should just as we all do. I can't believe there is no good here.", user_id: 5, listing_id: 5)
    Review.create(rating: 4, body: "I shed bitter tears here watching my king marry Margaery. They made a beautiful couple.", user_id: 6, listing_id: 7)
    Review.create(rating: 1, body: "An absolute cursed place where shadows live and kill beauty and honor.", user_id: 6, listing_id: 8)


puts "finished seeding!"