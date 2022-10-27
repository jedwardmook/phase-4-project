class Listing < ApplicationRecord
    belongs_to :host
    has_many :reviews
    has_many :users, through: :reviews

    def ratings_average
        ratings_array = self.reviews.map {|review| review.rating}
        ratings_sum = ratings_array.reduce(0) {|sum, num| sum + num }
        (ratings_sum.to_f/ratings_array.length).round(2)
    end

end
