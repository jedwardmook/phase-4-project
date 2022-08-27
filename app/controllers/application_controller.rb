class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid


private

  def handle_invalid exception
    render json: { errors: exception.record.errors.full_message }, status: :unprocessable_entity
  end

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"]}, status: :unauthorized unless @current_user
  end



end
