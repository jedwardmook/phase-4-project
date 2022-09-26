class RemoveAttributesFromListings < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :attributes, :string
  end
end
