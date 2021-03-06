class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  #@wrapper = Discogs::Wrapper.new("ShallowEndr")

  #for musicbrainz to get albums: https://musicbrainz.org/ws/2/artist/f181961b-20f7-459e-89de-920ef03c7ed0?inc=release-groups
  #find type="Album"


  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  def login
    byebug
    @user = User.find_by(email: user_params[:email])
    if @user
      if @user.authenticate(user_params[:password])
        jwt_token = Auth.issue({user_id: @user.id})
        render json: { user_id: @user.id, jwt: jwt_token }
      else
        render json: { errors: "Incorrect Password"}
      end
    else
      render json: { errors: "Unrecognized user" }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :username, :email, :password)
    end
end
