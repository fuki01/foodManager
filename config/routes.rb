Rails.application.routes.draw do
  root 'home#index'
  get 'student/loginform' => 'student#loginform', as: :student_loginform
  post 'student/login' => 'student#login', as: :student_login
  get 'user/home' => 'userhome#index', as: :user_home
  delete 'student/logout' => 'student#logout', as: :student_logout
  post 'student/student_session_add/:student_id' => 'student#student_session_add', as: :student_session_add

  resources :dailies, :only => [:show, :create, :edit, :update, :destroy]
  get 'dailies/:student_id/index' => 'dailies#index', as: :dailies_index
  get 'dailies/new/:date' => 'dailies#new', as: :new_daily
  get 'dailies/:id/stamp' => 'dailies#stamp', as: :stamp_daily

  resources :comments, :only => [:create]
  resources :student
  devise_for :users
end
