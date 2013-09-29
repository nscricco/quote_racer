class GameData
	ARRESTED_DEVELOPMENT_QUOTES = [
		"I\'ve made a huge mistake.",
		"I\'m afraid I just blue myself.",
		"Okay Lindsay, are you forgetting that I was a professional twice over? An analyst and a therapist.  The world\'s first analrapist.",
		"There\'s always money in the banana stand.",
		"I don\'t want no part of yo' tired ass country club, ya freak bitch!",
		"I\'ll never understand that you can never be nude? I understand more than you\'ll never know.",
		"I mean, it\'s one banana, Michael.  What could it cost? 10 dollars?",
		"Oh, mom.  After all these years, God\'s not gonna take a call from you.",
		"Has anyone in this family ever seen a chicken?",
		"Well, I certainly don\'t want to blame it all on 9/11, but it certainly didn't help.",
		"No touching!",
		"And that\'s why you always leave a note.",
		"Yes, he\'s lost his left hand, so he\'s going to be \'all right\'",
		"Well then Frank, I shall be a bigger, harier mole than the one on your inner left thigh.",
		"No, mother! I can blow myself and you have interfered for the last time!",
		"Everyone\'s laughing and riding and cornholing except Buster.",
		"You\'re gonna get some hop-ons.",
		"I\'ll be your wingman. Even if it means me taking a chubby, I will suck it up.",
		"There are dozens of us.  Dozens!",
		"Ann, you need to decide whether you want a man or a boy.  I know how I\'d answer."
		]

	def initialize
		@arrested_development = ARRESTED_DEVELOPMENT_QUOTES
	end

	def arrested_development min_length = 0
		quotes = @arrested_development.sample
		until quotes.split(" ").length >= min_length do
			quotes+= " " + @arrested_development.sample
		end
		return quotes
	end
end