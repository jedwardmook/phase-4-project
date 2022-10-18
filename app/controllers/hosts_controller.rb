class HostsController < ApplicationController
    def create
        host = Host.create!(host_params)
            render json: host, status: :created
        rescue ActiveRecord::RecordInvalid => e
            render json: { errors: "Listing not created" }, status: :unprocessable_entity
    end

    private
    
    def host_params
        params.permit(:name, :listing_id, :photo)
    end

end
