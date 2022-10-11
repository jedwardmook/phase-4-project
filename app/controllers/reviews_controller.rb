class ReviewsController < ApplicationController

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
      rescue ActiveRecord::RecordInvalid => e
        render json: { errors: "Review not created" }, status: :unprocessable_entity
    end



    private

    def review_params
        params.permit(:user_id, :listing_id, :body, :rating)
    end

end
