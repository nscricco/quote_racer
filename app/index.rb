require 'sinatra'
require_relative './models/quiz.rb'

get '/' do
	@quote = getQuote
	erb :typeracer
end

post '/' do
	redirect '/'
end