class ReviewsController < ApplicationController

    def show
        review = Review.find_by(id: params[:id])
        if review
            render json: review
        else
            render json: {error: "Review not found"}, status: :not_found
        end
    end

    def update
        review = Review.find_by(id: params[:id])
        if review
            review.update(review_params)
            render json: review, status: :accepted
        else
            render json: { error: "Review not found"}, status: :not_found
        end
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
      rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if review
          review.destroy
          head :no_content
        else
          render json: { error: "Review not found" }, status: :not_found
        end
    end

    private

    def review_params
        params.permit(:user_id, :listing_id, :body, :rating)
    end

end
