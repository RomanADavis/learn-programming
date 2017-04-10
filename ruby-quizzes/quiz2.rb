# my_array = ["matt", "phil"]
#
# my_array is an array with the values "matt" and "phil". Arrays are collections of values.
#
# Create an array with the values 1 and 2.

p [1, 2]

# Create an array with nothing inside it.

p []

# Create an Array that contains the values "mike tyson", 89, and 9.7.

p ["mike tyson", 89, 9.7]

# Identify the components of the following expression:

students = ["mary", "kathy", "frank"]
# students is a variable. An array is being assigned to it containing the values
# "mary", "kathy" and "frank"

# What does the following expression return:

["uno", "dos", "tres"].length()
#=> 3

name = "clem"
age = 32

# Is this array valid?

[name, age]
# yes

lyric = ["laughter", "it's", "free"]

# Get the first element of the lyric Array.

p lyric[0]

# Get the last element of the lyric Array.

p lyric[-1]

ruff = ["stop", "drop", "shut 'em down"]

# Add the string "open up shop" to the end of the ruff Array.

ruff << "open up shop"

# What does the following expression evaluate to?

5 == 5
#=> true

# What does the following expression evaluate to?

# true = 6
# I don't think it does. This uses the assignment operator (=) instead of the
# equality operator. Not only that, but it can't even evalueate to what's being
# assigned because true is a literal.

# Demonstrate that "matt" is the same as "matt".

p "matt" == "matt"

# What does the following expression evaluate to?

4 != 4
p false

# What does the following expression evaluate to?

5 > 4
p true

# What does the following expression print?

if 5 > 4
  puts "5 is greater than 4"
end

# "5 is greater than 4"

# What does the following expression print?

if 5 < 4
  puts "5 is less than 4"
else
  puts "5 is not less than 4"
end

# "5 is not less than 4"

# What does the following expression print?

if "sam" == "cat"
  puts "sam equals cat"
elsif "matt" == "matt"
  puts "matt equals matt"
else
  puts "whatever"
end

# "matt equals matt"

# What does the following expression print?

if 5
  puts "Hello there"
end

# "Hello there" because 5 is truthy

# What does the following expression print?

if "bob"
puts "bob is truthy"
else
puts "bob is falsey"
end

# "bob is truthy"

# What does the following expression print?

if nil
  puts "nil is truthy"
else
  puts "nil is falsey"
end

# "nil is falsey"

# What does the following expression print?

puts "This syntax is cool" if true

# "This syntax is cool"

# What does the following expression print?

puts "Tall buildings" if false

# Nothing, I think.

# What is the value of x?

x = 5
x = x + 1

# 6

# What is the value of mode?

mode = "chill"
mode += "hippie"

puts "chillhippie"

# What does the following code print?

counter = 0
while counter < 3
  puts "Went through the loop"
  counter = counter + 1
end

# "Went through the loop"
# "Went through the loop"
# "Went through the loop"

# What does the following code print?

while 3 > 15
  puts "This is the end"
end

# Nothing, since 3 is never larger than 15

# What does the following code print?

while true
  puts "This is the song that never ends"
end

# "This is the song that never ends" until something causes the program to stop.
