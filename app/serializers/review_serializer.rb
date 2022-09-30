class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :listing_id
end
