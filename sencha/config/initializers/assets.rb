# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Load fonts as well
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
# sprockets-2.11.0/lib/sprockets/sass_functions.rb
# config.compass could config compass here

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( desktop.js mobile.js desktop.css mobile.css )

# Sencha Touch

module SenchaTouch
  module SassExtensions
    module Functions
      module ThemeImages
        def theme_image(theme, path, mime_type = nil)
          path = path.value
          images_path = Rails.root.join("vendor", "assets", "frameworks", "touch", "resources", "themes", "images", theme.value)
          real_path = File.join(images_path, path)
          inline_image_string(data(real_path), compute_mime_type(path, mime_type))
        end
      end
    end
  end
end


module Sass::Script::Functions
  include SenchaTouch::SassExtensions::Functions::ThemeImages
end