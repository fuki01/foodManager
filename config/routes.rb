Rails.application.routes.draw do
  root 'home#index'
  get 'student/loginform' => 'student#loginform', as: :student_loginform
  post 'student/login' => 'student#login', as: :student_login
  get 'user/home' => 'userhome#index', as: :user_home
  delete 'student/logout' => 'student#logout', as: :student_logout
  resources :dailies, :only => [:index, :show, :create, :edit, :update, :destroy]
  get 'dailies/new/:date' => 'dailies#new', as: :new_daily
  resources :student
  devise_for :users
end
