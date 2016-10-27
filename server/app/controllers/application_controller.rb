class ApplicationController < ActionController::API
  include Pundit
  include DoorkeeperHelpers

  before_action :doorkeeper_authorize!

  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from Pundit::NotAuthorizedError,   with: :not_authorized

  private

  def jsonapi_params(options = {})
    ActiveModelSerializers::Deserialization.jsonapi_parse params, options
  end

  def respond_with_success(entity, status: :ok, **options)
    render jsonapi: entity, status: status, **options
  end

  def respond_with_errors(entity, status: :unprocessable_entity)
    render jsonapi: entity, status: status,
      serializer: ActiveModel::Serializer::ErrorSerializer
  end

  def not_found
    render json: { error: "Not found" }, status: :not_found
  end

  def not_authorized
    render json: { error: "Not authorized" }, status: :unauthorized
  end

end
