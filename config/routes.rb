Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
<<<<<<< HEAD
    resources :products, :meals, :locations
=======
    resources :products, :meals, :locations, :carts
>>>>>>> architect
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
