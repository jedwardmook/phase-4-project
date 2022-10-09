class Listings < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :rating
  end
end
