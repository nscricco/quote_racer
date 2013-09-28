require 'sinatra'
require_relative 'models/game_data.rb'

get '/' do
	@data = getQuote
	erb :typeracer
end

post '/' do
	redirect '/'
end