Rails.application.routes.draw do
  root 'pages#home'

  get 'about' => 'pages#about'

  get 'drone' => 'pages#drone'

  get 'survey' => 'pages#survey'

  get 'print' => 'pages#print'

  get 'portfolio' => 'pages#portfolio'

  get 'contacts' => 'pages#contacts'

  get 'privacy' => 'pages#privacy'

  get 'archeologia' => 'pages#archeologia'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
