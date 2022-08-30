class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :photo, :bio, :location, :allegiance
end
