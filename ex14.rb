user_name = ARGV.first ? ", " + ARGV.first : ""
prompt = '$'

puts "Hi#{user_name}."
puts "I'd like to ask you a few questions."
puts "Do you like me#{user_name}?", prompt
likes = $stdin.gets.chomp

puts "Where do you live#{user_name}?", prompt
lives = $stdin.gets.chomp

puts "What kind of coumputer do you have?", prompt
pc = $stdin.gets.chomp

puts """
Alright #{user_name}, you said \"#{likes}\" about liking me.
You live way over in #{lives}. I don't know where that is.
And you have a #{pc} for a computer. Nice.
"""
