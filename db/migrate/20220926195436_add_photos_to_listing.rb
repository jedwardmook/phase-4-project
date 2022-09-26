class AddPhotosToListing < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :photos, :string, array: true, default: []
  end
end
