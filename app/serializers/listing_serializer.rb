class ListingSerializer < ActiveModel::Serializer
    attributes :id, :name, :location, :host_id, :price, :about, :photos, :amenities
    
    has_many :reviews
    has_many :users, through: :reviews
    belongs_to :host

end