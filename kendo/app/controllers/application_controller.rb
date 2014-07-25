class ApplicationController < ActionController::Base
  layout :layout_by_resource
  protect_from_forgery with: :exception
  before_action :detect_device_format
  before_action :authenticate_user!

  private

  def layout_by_resource
    if devise_controller?
      'devise'
    else
      'application'
    end
  end

  def after_sign_in_path_for(resource_or_scope)
    if browser.mobile?
      root_path
    else
      stored_location_for(resource_or_scope) || signed_in_root_path(resource_or_scope)
    end
  end

  def detect_device_format
    case request.user_agent
      when /iPad/i
        request.variant = :tablet
      when /iPhone/i
        request.variant = :phone
      when /Android/i && /mobile/i
        request.variant = :phone
      when /Android/i
        request.variant = :tablet
      when /Windows Phone/i
        request.variant = :phone
    end
  end
end
