class AddImageToHosts < ActiveRecord::Migration[6.1]
  def change
    add_column :hosts, :image, :string
  end
end
