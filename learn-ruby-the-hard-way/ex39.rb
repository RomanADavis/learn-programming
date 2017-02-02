# Create a mapping of states to abbreviations
states = {
  "Oregon" => "OR",
  "Florida" => "FL",
  "California" => "CA",
  "New York" => "NY",
  "Michigan" => "MI"
}

# Creates a basic set of states and some cities in them
cities = {
  "CA" => "San Fransisco",
  "IL" => "Detroit",
  "FL" => "Jacksonville"
}

# add some more cities
cities["NY"] = "New York"
cities["OR"] = "Oregon"

# puts some cities
puts '-' * 10
puts "NY State has #{cities["NY"]}"
puts "OR State has #{cities["OR"]}"

# puts some states
puts '-' * 10
puts "Michigan's abbreviation is #{states["Michigan"]}"
puts "Florida's abbreviation is #{states["Florida"]}"

# Do it by using the state then cities dict
puts '-' * 10
puts "Michigan has #{cities[states["Michigan"]]}"
puts "Florida has #{cities[states["Florida"]]}"

# puts every state abbreviation
puts '-' * 10
states.each do |state, abbreviation|
  puts "#{state} is abbreviate #{abbreviation}"
end

#puts every city in state
puts '-' * 10
cities.each do |state, city|
  puts "#{state} has the city #{city}"
end

# now do both at the same time
puts '-' * 10
states.each do |state, abbreviation|
  city = cities[abbreviation]
  puts "#{state} is abbreviated #{abbreviation} and has #{city}."
end

puts "-" * 10
# by default ruby says nil when something isn't there
state = states["Texas"]

puts "Sorry. No Texas." if !state

city = cities["Texas"]
city ||= "Does not exist"
puts "The city for the state 'TX' is: #{city}"

#TODO: Make dictionaries for the Philippines provincce and capitals.
