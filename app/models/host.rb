class Host < ApplicationRecord
    has_many :listings
    has_many :reviews, through: :listings
    has_many :users, through: :reviews
end