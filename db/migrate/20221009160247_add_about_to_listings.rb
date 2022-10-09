class AddAboutToListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :about, :string 
  end
end
