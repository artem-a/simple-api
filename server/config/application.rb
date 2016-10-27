require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
# require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SimpleApi
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true

    # Include all concern directories in app/*/concerns
    concern_dirs = Dir['app/*/concerns'].map { |d| File.expand_path(d) }

    # UTC all the way
    config.time_zone = "UTC"
    config.active_record.default_timezone = :utc

    # Setup active job
    config.active_job.queue_adapter = :sidekiq

    # Setup cache store
    config.cache_store = :redis_store, "#{ENV["REDIS_URL"]}/cache",
      { expires_in: 90.minutes }

  end
end
