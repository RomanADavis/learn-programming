filename = ARGV.first

puts "Here's #{filename}:"
open(filename) {|text| print text.read}

puts "Type your filename again."
filename = $stdin.gets.chomp

puts "Here's your file again:"
text = open(filename)

print text.read
