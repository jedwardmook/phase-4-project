class Listing < ApplicationRecord
    belongs_to :host
    has_many :reviews
    has_many :users, through: :reviews

end
