class ListingSerializer < ActiveModel::Serializer
    attributes :id, :photos, :name, :location, :user, :amenities, :price
    has_many :reviews
    belongs_to :user



end