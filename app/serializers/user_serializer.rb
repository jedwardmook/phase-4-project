class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :photo, :bio, :location, :allegiance, :reviews
  
  has_many :reviews
  has_many :listings, through: :reviews

end
