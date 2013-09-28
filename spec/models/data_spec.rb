require_relative 'spec_helper'

describe 'Data' do
	include Spec

	it 'should return a phrase' do
		phrase = GameData.new
		expect(phrase.arrested_development).not_to be_empty
	end
end