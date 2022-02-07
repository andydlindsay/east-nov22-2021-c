Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', to: 'users#index'
  # get 'login', action: :index, controller: 'users'

  # resources :cities, except: [:index, :show]

  # resources :cities

  # resources :characters

  resources :cities do
    resources :characters
  end

end
