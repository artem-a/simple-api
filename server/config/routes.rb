Rails.application.routes.draw do

  scope :api do
    scope :v1 do
      resources :users do
        get :activate, on: :member
      end

      resources :posts
      resources :reset_passwords, only: %i[show create update]
    end

    use_doorkeeper do
      skip_controllers :applications, :authorized_applications, :authorizations
      controllers tokens: :tokens
    end
  end

  root "home#index"

end
