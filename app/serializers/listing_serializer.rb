class LisitingSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :photos, :name, :location, :rating
end