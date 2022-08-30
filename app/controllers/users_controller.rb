class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
      rescue ActiveRecord::RecordInvalid => e
        render json: { errors: "Username unavailable/password imbalance" }, status: :unprocessable_entity
    end

    def show
        render json: @current_user
    end



    private
    def user_params
        params.permit(:username, :password, :password_confirmation, :photo, :name, :bio, :location, :allegiance)
    end

end
