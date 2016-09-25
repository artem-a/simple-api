class UsersController < ApplicationController

  skip_before_action :doorkeeper_authorize!

  def create
    build_user

    if @user.save
      send_activation
      respond_with_success @user, status: :created
    else
      respond_with_errors @user
    end
  end

  private

  def user_params
    jsonapi_params
  end

  def build_user
    @user ||= User.new
    @user.assign_attributes user_params
  end

  def send_activation
    UserMailer.activation_email(@user).deliver_later
  end

end
