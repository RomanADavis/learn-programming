types_of_people = 10
setup = 'There are #{types_of_people} types of people.'
binary = "binary"
do_not = "don't"
punchline = "Those who understand #{binary} and those who #{do_not}." # 1 & 2

puts setup
puts punchline

puts "I said #{setup}" # 3
puts "I also said '#{punchline}'" # 4

evaluation = false
evaluation_request = "Isn't that joke incredibly funny?: #{evaluation}"

puts evaluation_request

left_side = "This is on the left side of..."
right_side = "the right side."

puts left_side + right_side
