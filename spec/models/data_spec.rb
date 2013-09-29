require_relative 'spec_helper'

describe 'Data' do
	include Spec

	phrase = GameData.new

	it 'should return a phrase' do
		expect(phrase.arrested_development).not_to be_empty
	end
	it 'should return a phrase of defined minimum length' do
		phrase_length_in_words = 100
		expect(phrase.arrested_development.split(" ").length).to be > 100
	end
end