class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :listing_id, :rating, :user, :listing

  belongs_to :user
  belongs_to :listing


end
