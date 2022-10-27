class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :listings, through: :reviews
    has_many :hosts, through: :listings
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, unless: -> { self.id != nil}
    validates :password_confirmation, presence: true, unless: -> { self.id != nil}

end
