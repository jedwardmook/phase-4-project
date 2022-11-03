class HostSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :listings, :listing_reviews

  has_many :listings
  has_many :users, through: :reviews
end
