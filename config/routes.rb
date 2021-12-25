Rails.application.routes.draw do
  resources :users
  # resources :students
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/students/login', to: 'students_login#new'
  post '/students/login', to: 'students_login#create'
  get '/dailys', to: 'dailys#index', as: 'dailys'
end
