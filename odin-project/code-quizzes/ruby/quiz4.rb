# What does the following code print?

name = :crank
puts name.inspect

# ":crank"

# What does the following code print?

puts "unicorn".reverse

# "nrocinu"

# What does the following code print?

puts :unicorn.reverse

# It doesn't. There's no method called reverse for symbols.

# What does this code print?

["fat", "bat", "rat"].each do |word|
  puts word + "-land"
end

# "fat-land"
# "bat-land"
# "rat-land"

# What does this code print?

counter = 0
array = ["fat", "bat", "rat"]

while counter < array.length
  puts array[counter] + "-land"
  counter += 1
end

# "fat-land"
# "bat-land"
# "rat-land"

# What does the following code print?

array = ["snake", "rat", "cat", "dog"]

array.each do |animal|
  puts animal if animal[0] == "s"
end

# "snake"

# What does the following code return?

[:a, :b, :c].include?(:a)

# What does the following code return?

[:a, :b, :c].include?(:a)

# true

# What does the following code return?

["roof", "top"].include?("bar")

# false

# What does the following code return?

["Too", "Weird", "To", "Live", "Too", "Rare", "To", "Die"].join(" ")

# "Too Weird To Live Too Rare To Die"

# What does the following code return?

["where's", "wallace", "at"].join("***")

# "where's***wallace***at"

[2, 4, 6, 8].map do |number|
  number ** 2
end

# [4, 16, 36, 64]

# A hash is a collection of key/value pairs and is fundamental data structure
# in Ruby (arrays are alse a fundamental Ruby data structure). This is an
# example of a hash that summarizes the Warty Newt.

warty_newt = { "type" => "Amphibian", "diet" => "Carnivore", "life_span" => 25 }

# Identify the components of the wart_newt hash.

# Hashes starts and ends with curly braces ({}). The warty_newt hash has three
# keys: "type", "diet", and "life_span", each with their own values.

# What does the following code return?

warty_newt["type"]

# "Amphibian"

# What does the following code return?

warty_newt.fetch("type")

# "Amphibian"

# What does the following print?

warty_newt["weight"] = "0.3 ounces"
puts wart_newt

#{"type" => "Amphibian", "diet" => "Carnivore", "life_span" => "25 years", "weight" => "0.3 ounces"}

# Create a hash snowy_owl, a bird, that is a carnivore that has a life span of
# 10 years.

snowy_owl = {"type" => "Bird", "diet" => "Carnivore", "life_span" => "10 years"}

# What does the following code return?

puts snowy_owl

# Actually, puts and other prints statements return nil in Ruby.

# What does the following return?

snowy_owl.keys()

# => ["type", "diet", "life_span"]

# What does the following code return?

snowy_owl.values()

# => ["Bird", "Carnivore", "10 years"]

# What does the following code return?

snowy_owl.select do |key, value|
  key == "type"
end

# => {"type"=>"Bird"}

snowy_owl = {type: "Bird", diet: "Carnivore", life_span: "10 years"}

result = []
first_names = ["Hamburglar", "Grimace", "Ronald"]
last_name = "McDonald"

# Iterate through first_names and populate result with the first_names and last
# name (result should be ["Hamburglar McDonald", "Grimace McDonald", "Ronald
# McDonald"] after the iteration).

first_names.map do |name|
  name + last_name
end

personality_types = ["bad", "good", "great"]

# Iterate through the personality_types and construct this array:
["bad person", "good person", "great person"]

personality_types.map {|type| "#{type} person"}

# Convert ["water", "too", "polluted", "with", "germs"] to "Water too polluted
# with germs".

["water", "too", "polluted", "with", "germs"].join(" ")

lebron = {:sport => "basketball", :birth_place => "Akron"}

# Return the value corresponding to the key :sport for the lebron hash.

lebron[:sport]

# Add the :high_school key to the lebron hash with the value "St. Vincent-St.
# Mary High School"

lebron[:high_school] = "St. Vincent-St. Mary High School"

# Return an array of all the keys in the lebron hash.

lebron.keys()

# Return an arrray of all the values in the lebron hash

lebron.values()
