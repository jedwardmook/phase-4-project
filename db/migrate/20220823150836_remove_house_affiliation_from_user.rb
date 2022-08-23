class RemoveHouseAffiliationFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :house_affiliation, :string
  end
end
