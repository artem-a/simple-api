class ResetPasswordsController < ApplicationController

  skip_before_action :doorkeeper_authorize!

  def create
    # TODO: add token generation and sending
  end

  def show
    # TODO: add token checking
  end

end
