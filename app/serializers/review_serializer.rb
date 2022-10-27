class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :rating, :user, :listing

  belongs_to :user
  belongs_to :listing


end
