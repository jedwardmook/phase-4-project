class HostSerializer < ActiveModel::Serializer
  attributes :id, :name, :listing_id, :image

  has_many :listings
  has_many :reviews, through: :listings
end
