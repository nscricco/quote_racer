$LOAD_PATH.unshift(File.expand_path('./index'))
ENV['RACK_ENV'] = 'test'

require 'config'
require 'rack/test'

module Spec
	include Rack::Test::Methods

	def app
		Sinatra::Application
	end
end