class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo, :bio, :location, :allegiance
  
  has_many :reviews
  has_many :listings, through: :reviews
  has_many :hosts, through: :listings

end
