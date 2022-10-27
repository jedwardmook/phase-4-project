class Review < ApplicationRecord
    validates :rating, presence: true
    validates :body, length: { minimum: 2}
    belongs_to :user
    belongs_to :listing

end