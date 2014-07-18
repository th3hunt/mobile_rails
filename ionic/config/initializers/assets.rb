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