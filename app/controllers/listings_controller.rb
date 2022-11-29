class ListingsController < ApplicationController
    # skip_before_action :authorize, only: [:index, :show]

    def index 
        render json: Listing.all.order(name: :asc) , status: :ok
    end

    def show
        listing = Listing.find_by(id: params[:id])
        if listing
            render json: listing
        else
            render json: { error: "Listing not found" }, status: :not_found
        end
    end

    def create
        listing = Listing.create!(listing_params)
            render json: listing, status: :created
        rescue ActiveRecord::RecordInvalid => e
            render json: { errors: "Listing not created" }, status: :unprocessable_entity
    end

    private
    def listing_params
        params.permit(:name, :location, :about, :price, :host_id, :id, photos: [], amenities: [])
    end

end
