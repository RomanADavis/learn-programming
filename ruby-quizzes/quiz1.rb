# Assign the variable x to the value 5.
x = 5

# What is the datatype of "Matt"?
# string
#
# Is x a string?

puts x.is_a? String
#=> false

# What does this expression evaluate to?
#
# "YO" + "LO"

puts "YOLO"

# What does this expression evaluate to?
#
# "Cool".+("io")

puts "Coolio"

# What does this expression evaluate to?
#
# "bob" + 42

puts "It doesn't, since 42 won't implicitly convert to a string."

a = "Bat"
b = "woman"

# What does this expression evaluate to?

a + b

puts "Batwoman"


# When variables are assigned to values, the variable can be used in place of the value.
#
# What does this expression print?

my_name = "50 Cent"
my_name = "Miley"
p my_name
#=> "Miley"

rapper = "Jaydakiss"

# Get the first letter from the string "Jaydakiss".

puts rapper[0]

# Get the first through 3rd elements from the "Jaydakiss" string.

puts rapper[0..2]

# Get the last element from the "Jaydakiss" string.

puts rapper[-1]

# Replace the "l" in the following string with "m":

word = "lace"

word[0] = "m"

puts word

# Assign the variable my_dawg to the value "DMX"

my_dawg = "DMX"



my_dawg = "DMX"

# What does the following expression evaluate to?

# "Dead Poet" = fav_bar

puts "It doesn't. You can't assign to a literal. And fav_bar is undefined."

# What does the following expression print?

something = "cats"
crazy = something
puts crazy

puts "cats"

# What does the following expression evaluate to?

3 + 4
puts 7

# What does the following expression evaluate to?

4 * 7
puts 28

# What does the following expression evaluate to?

2 ** 3
puts 8

# What does the following expression evaluate to?

8 / 2
puts 4

# What does the following expression evaluate to?

3 / 2
puts 1

# What does the following expression evaluate to?

3.0 / 2.0

puts 1.5

# What does the following expression evaluate to?

"i am not shouting".upcase()
puts "I AM NOT SHOUTING"

# Convert every letter of "YoLo BrAh" to lowercase.

nice = "YoLo BrAh"
puts nice.downcase

# Concatenate the following strings:

first = "Beautiful "
second = "face tattoo"

puts first + second

# Integers have useful built-in methods too. Convert the number 5 to the string "5".

puts 5.to_s

# What is the problem with the following code?
#
# my variable = "Mr. White"

# I'm pretty sure just randomly putting the word "my" in the code like that will
# cause some sort of error, my guess would be: "Undefined variable or method "my"

# Update the code, so it can run successfully:
#
# band = "Blink" + 182

band = "Blink" + 182.to_s
