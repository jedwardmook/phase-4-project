class ListingsController < ApplicationController

    def create
        listing = Listing.create!(listing_params)
            render json: listing, status: :created
          rescue ActiveRecord::RecordInvalid => e
            render json: { errors: "Listing not created" }, status: :unprocessable_entity
        end
    end

    private
    def listing_params
        params.permit(:location, :rating, :user_id, :amenities, photos:[])
    end

end
