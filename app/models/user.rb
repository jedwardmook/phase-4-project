class User < ApplicationRecord
    has_secure_password
    has_many :listings, through: :user
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, unless: -> { self.id != nil}
    # , confirmation: true
    validates :password_confirmation, presence: true, unless: -> { self.id != nil}


end
