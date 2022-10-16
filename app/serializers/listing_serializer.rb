class ListingSerializer < ActiveModel::Serializer
    attributes :id, :name, :location, :user_id, :price, :about, :photos, :amenities
    
    has_many :reviews
    belongs_to :user

end