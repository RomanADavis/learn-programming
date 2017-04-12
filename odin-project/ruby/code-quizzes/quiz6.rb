# What does the following code return?

:id.instance_of?(Symbol)

# => true

result = []
weird_array = ["blah", :meow, 42, 90, :building]

# Iterate over every element of weird_array and add the element to result if the
# element is a Symbol (ie. an element of the Symbol class).

weird_array.each {|element| result << element if element.instance_of?(Symbol)}

sports = ["basketball", "baseball", "football"]

# Iteratate over the sport array and print out the following list:

"0. basketball"
"1. baseball"
"2. football"

sports.each_with_index {|element, index| puts "#{index}. #{element}"}

last_names = ["D", "Krugman"]

# Iterate over last_names and create this array: ["Paul D", "Paul Krugman"]

last_names.map {|name| "Paul #{name}"}

soap_opera = ["all", "my", "children"]

# Return true if any of the elements start with "a" and false otherwise?

soap_opera.any? {|word| word[0] == "a"}

tools = ["ruby", "rspec", "rails"]

tools.all? {|tool| tool[0] == "r"}

# Return true if the string stimpy contains the letter "s" and false otherwise.

"stimpy".include?("s")

captain_planet = ["earth", "fire", "wind", "water", "heart"]

# Create a new array from the captain_planet array with all the elements that
# contain the letter "a"

captain_planet.select {|powers| powers.include?("a")}

stuff = ["candy", :pepper, "wall", :ball, "wacky"]

# Identify the first element in the stuff array that starts with the letters
# "wa"

stuff.find {|item| item[0..1] == "wa"}

# Identify all the elements of the stuff array that begin with the letters "wa"

stuff.select {|item| item[0..1] = "wa"}

abcs = [:a, :b, :c]

# Create the array [:c, :b, :a] from the abcs array.

abcs.reverse

people = [["Lebron", "cool dude"], ["Bieber", "jerk face"]]

# The people array is an array of two arrays. An array that contains arrays is
# called a nested array.

# Get the first element of the people array.

people[0]

# Get the "cool dude" string from the people array.

people[0][1]

x = "cat"
y = "hat"

# Find two ways to concatenate x and y to form the sentence "the cat in the hat"

"the " + x + " in the " + y
"the #{x} in the #{y}"

# Iterate through the people array and print the following sentences: Lebron is
# a cool dude Beiber is a jerk face

people.each {|name, description| puts "#{name} is a #{description}"}
# This is a syntax I did not know.

test_scores = [["jon", 99], ["sally", 65], ["bill", 85]]

# Create an array of test score greater than 80. The result should be ["jon",
# 99], ["bill", 85]].

test_scores.select {|_, score| score > 80}

ages = [[:frank, 42], [:sue, 77], [:granny, 77]]

# Get the first person from the ages array that is 77 years old. The result
# should be [:sue, 77]

ages.find {|_, age| age == 77}

planets = {:earth => [:luna], :mars => [:deimos, :phobos],
  :jupiter => [:callisto, :io, :europa]}

# Return the moons of :mars.

planets[:mars]

# Return the moons of :mars as a single string separated by a comma. Result
# should be "deimos, phobos".

planets[:mars].map {|baseball_players_array = [[:babe_ruth, [2873, 714, 474]], [:barry_bonds, [2935, 762, 444]]]

# The baseball_players_array has the same information as the hash in the
# previous questions. Return the number of home runs that Babe Ruth hit in his
# career. Result should be 714.

baseball_players_array[0][0][1]moon| moon.to_s}.join(", ") # Original answer
planets[:mars].join(", ") # What!?

baseball_players = {:babe_ruth => {:hits => 2873, :home_runs => 714,
  :obp => 474}, :barry_bonds => {:hits => 2935, :home_runs => 762, :obp => 444}}
# Return the number of home_runs that Babe Ruth hit in his career.

baseball_players[:babe_ruth][:home_runs]

baseball_players_array = [[:babe_ruth, [2873, 714, 474]], [:barry_bonds, [2935, 762, 444]]]

# The baseball_players_array has the same information as the hash in the
# previous questions. Return the number of home runs that Babe Ruth hit in his
# career. Result should be 714.

baseball_players_array[0][1][1]

economists = [{:name => "krugman", :specialty => "international macro"},
  {:name => "mankiw", :specialty => "pigovian taxation"}]

# Describe the data structure of the economists variable. Get the name of the
# first element in the economists array (result should be "krugman").

# It's an array of hashes with the same structure.
economists[0][:name]
