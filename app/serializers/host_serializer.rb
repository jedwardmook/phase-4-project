class HostSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :listings

  has_many :listings
  has_many :users, through: :reviews
end
