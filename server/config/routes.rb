Rails.application.routes.draw do

  scope :api do
    scope :v1 do
      resources :users
    end

    use_doorkeeper do
      controllers tokens: "tokens", token_info: "token_info"
      skip_controllers :applications, :authorized_applications, :authorizations
    end
  end


  root "home#index"

end
