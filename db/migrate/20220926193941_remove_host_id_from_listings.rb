class RemoveHostIdFromListings < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :host_id, :integer 
  end
end
