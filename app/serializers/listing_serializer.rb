class ListingSerializer < ActiveModel::Serializer
    attributes :id, :photos, :name, :location, :user_id, :amenities, :price, :about
    has_many :reviews
    belongs_to :user

end