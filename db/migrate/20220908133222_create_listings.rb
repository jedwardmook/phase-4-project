class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :location
      t.string :host
      t.string :amenities
      t.integer :review_id
      t.integer :rating
      t.timestamps
    end
  end
end
