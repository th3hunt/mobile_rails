class API::BaseController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  respond_to :json

  def self.no_cache(*args)
    before_filter :set_no_cache, *args
  end

  # Thou shalt not cache!!
  no_cache

  def set_no_cache
    response.headers['Cache-Control'] = 'no-cache, no-store, max-age=0, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
  end
end
