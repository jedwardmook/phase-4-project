class CreateHosts < ActiveRecord::Migration[6.1]
  def change
    create_table :hosts do |t|
      t.string :name
      t.integer :listing_id

      t.timestamps
    end
  end
end