class ApplicationController < ActionController::API
  include Pundit

  before_action :doorkeeper_authorize!

  private

  def jsonapi_params(**options)
    ActiveModelSerializers::Deserialization.jsonapi_parse params, **options
  end

  def respond_with_success(entity, status: :ok, **options)
    render jsonapi: entity, status: status, **options
  end

  def respond_with_errors(entity, status: :unprocessable_entity, **options)
    render jsonapi: entity, status: status,
      serializer: ActiveModel::Serializer::ErrorSerializer, **options
  end

end
