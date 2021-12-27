Rails.application.routes.draw do
  root 'home#index'
  resources :student
  devise_for :users
end
