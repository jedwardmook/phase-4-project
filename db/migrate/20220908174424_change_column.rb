class ChangeColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :listings, :host, :host_id
  end
end
