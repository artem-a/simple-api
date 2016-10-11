class TokensController < Doorkeeper::TokensController

  # TODO: add user activity
  # https://github.com/doorkeeper-gem/doorkeeper/blob/master/app/controllers/doorkeeper/tokens_controller.rb
  # def create
  #   response = authorize_response
  #   headers.merge! response.headers
  #
  #   self.response_body = response.body.to_json
  #   self.status        = response.status
  # rescue Errors::DoorkeeperError => e
  #   handle_token_exception e
  # end

end
