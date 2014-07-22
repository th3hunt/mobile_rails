Rails.application.routes.draw do

  devise_for :users

  namespace :api, defaults: { format: 'json' } do

    resources :people, only: [:index, :show]

  end

  root to: 'homepage#index'

end
