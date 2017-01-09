print "Give me a number: "
number = gets.chomp.to_i

bigger = number * 100
puts "A bigger number is #{bigger}."

print "Give me another number: "
another = gets.chomp.to_i
smaller = another / 100

puts "A smaller number is #{smaller}."

# to_f is a method that converts an object to a float

puts "Can I have some money?"
money = gets.chomp.to_f

puts "Thanks. Here's your change: #{money / 10}"
