Rails.application.routes.draw do
  root 'home#index'
  get 'user/home' => 'userhome#index', as: :user_home
  resources :student
  devise_for :users
end
