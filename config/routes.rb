Rails.application.routes.draw do
  root 'home#index'
  get 'user/home' => 'userhome#index', as: :user_home
  get 'student/loginform' => 'student#loginform', as: :student_loginform
  post 'student/login' => 'student#login', as: :student_login
  delete 'student/logout' => 'student#logout', as: :student_logout
  resources :student
  devise_for :users
end
