class ApplicationController < ActionController::API

  def current_user
    User.find(Auth.decode(token)[0]["user_id"]) if token.present?
  end

  def signed_in?
    !!current_user
  end

  def authenticate
    render json: { error: "Unauthorized User" } unless signed_in?
  end

  private

  def token
    request.env["HTTP_AUTHORIZATION"]
  end

  def auth
    Auth.decode(token)
  end

end
