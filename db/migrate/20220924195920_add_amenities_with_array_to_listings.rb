class AddAmenitiesWithArrayToListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :amenities, :string, array: true, default: []
  end
end
