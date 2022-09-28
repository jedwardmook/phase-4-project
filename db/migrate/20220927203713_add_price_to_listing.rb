class AddPriceToListing < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :price, :string
  end
end
