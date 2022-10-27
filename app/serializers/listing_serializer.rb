class ListingSerializer < ActiveModel::Serializer
    attributes :id, :name, :location, :price, :about, :photos, :amenities, :ratings_average, :host
    
    has_many :reviews
    has_many :users, through: :reviews
    belongs_to :host

end