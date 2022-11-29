Rails.application.routes.draw do

  resources :hosts, only: [:create, :show]
  resources :reviews, only: [:create, :show, :update, :destroy]
  resources :listings, only: [:index, :show, :create]
  resources :users, only: [:create, :show, :update, :destroy]
  resources :sessions, only: [:create, :show, :destroy]

  get 'me', to: "users#show_me"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
