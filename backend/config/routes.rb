Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :mazes, only: [:index, :show]
  resources :hay_patches, only: [:index, :show]
  resources :users, only: [:index, :show]
  resources :characters, only: [:index, :show]
end
