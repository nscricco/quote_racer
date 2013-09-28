require 'rack/test'
require_relative '../../app/index'

set :raise_errors, true
set :dump_errors, true
set :show_expectations, false

module Spec
	include Rack::Test::Methods

	def app
		Sinatra::Application
	end
end