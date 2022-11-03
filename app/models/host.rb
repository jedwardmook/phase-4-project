class Host < ApplicationRecord
    has_many :listings, dependent: :destroy
    has_many :reviews, through: :listings
    has_many :users, through: :reviews

    def listing_reviews 
        reviews = self.listings.map {|listing| listing.reviews}
        reviews.flatten(1)
    end

end