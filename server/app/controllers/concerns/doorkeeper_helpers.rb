module DoorkeeperHelpers
  extend ActiveSupport::Concern

  # Return the current user
  def current_user
    @current_user ||= begin
      User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end
  end

  # Check authentication
  def logged_in?
    !!current_user
  end

end
