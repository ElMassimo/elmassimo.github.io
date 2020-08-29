# frozen_string_literal: true

raise ArgumentError, 'You must configure RACK_ENV for the application instance' unless ENV['APP_ENV'] = ENV['RACK_ENV']

require 'rubygems'

# Set up gems listed in the Gemfile.
ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __dir__)

require 'bundler/setup' if File.exist?(ENV['BUNDLE_GEMFILE'])

Bundler.require(:default, ENV['APP_ENV'])

# Allow the console to reload with this shortcut.
def self.reload!
  # Require all plugins.
  Dir[File.expand_path('_plugins/**/*.rb', __dir__)].sort.each { |f| require f }
end

reload!
