class ResetPasswordsController < ApplicationController

  skip_before_action :doorkeeper_authorize!

  def create
    @user = User.find_by_email(params[:email])

    if @user
      @user.generate_reset_password_token!
      send_reset_password_token
    end

    respond_with_success nil
  end

  def show
    load_user

    if @user
      respond_with_success nil
    else
      not_found
    end
  end

  def update
    load_user

    if @user.blank?
      not_found
    elsif @user.change_password!(params[:password])
      respond_with_success nil
    else
      respond_with_errors @user
    end
  end

  private

  def load_user
    @user ||= User.load_from_reset_password_token(params[:id])
  end

  def send_reset_password_token
    UserMailer.reset_password_email(@user).deliver_later
  end

end
