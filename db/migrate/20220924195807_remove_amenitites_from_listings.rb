class RemoveAmenititesFromListings < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :amenities, :string
  end
end
