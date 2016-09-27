class UsersController < ApplicationController

  skip_before_action :doorkeeper_authorize!, only: %i[create activate]

  def create
    build_user

    if @user.save
      send_activation
      respond_with_success @user, status: :created
    else
      respond_with_errors @user
    end
  end

  def activate
    load_user_by_activation_token

    if @user
      @user.activate!
      respond_with_success @user
    else
      not_found
    end
  end

  private

  def user_params
    jsonapi_params only: %i[username email password company_attributes]
  end

  def build_user
    @user ||= User.new
    @user.assign_attributes user_params
  end

  def load_user_by_activation_token
    @user ||= User.load_from_activation_token(params[:id])
  end

  def send_activation
    UserMailer.activation_email(@user).deliver_later
  end

end
