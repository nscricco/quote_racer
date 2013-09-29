require 'sinatra'
require_relative 'models/game_data.rb'

get '/' do
	@data = (GameData.new).arrested_development(30)
	erb :typeracer
end

post '/' do
	redirect '/'
end