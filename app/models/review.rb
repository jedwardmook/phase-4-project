class Review < ApplicationRecord
    validates :rating, presence: true
    validates :body, length: { minimum: 2}
    validates :user_id, :uniqueness => { :scope => :listing_id,
        :message => " has left a review. Please edit your review." }
    belongs_to :user
    belongs_to :listing

end