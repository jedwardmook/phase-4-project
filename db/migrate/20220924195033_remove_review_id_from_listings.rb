class RemoveReviewIdFromListings < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :review_id, :integer
  end
end
