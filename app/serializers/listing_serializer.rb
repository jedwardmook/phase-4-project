class ListingSerializer < ActiveModel::Serializer
  attributes :id, :location, :user_id, :amenities, :rating, :photos
end
