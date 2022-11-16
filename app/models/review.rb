class Review < ApplicationRecord
    validates :rating, presence: true
    validates :body, length: { minimum: 2}
    validates :user_id, uniqueness: { message: " has already left a review. Please edit existing review."}
    belongs_to :user
    belongs_to :listing

end