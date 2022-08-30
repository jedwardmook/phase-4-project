class AddColumnsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :photo, :string
    add_column :users, :name, :string
    add_column :users, :bio, :string
    add_column :users, :location, :string
    add_column :users, :allegiance, :string
  end
end
