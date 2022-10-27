class HostsController < ApplicationController
    
    def create
        host = Host.create!(host_params)
            render json: host, status: :created
        rescue ActiveRecord::RecordInvalid => e
            render json: { errors: "Listing not created" }, status: :unprocessable_entity
    end

    def show
        host = Host.find_by(id: params[:id])
        if host
            render json: host
        else
            render json: { error: "Host not found" }, status: :not_found
        end
    end

    private
    
    def host_params
        params.permit(:name, :listing_id, :photo)
    end

end
