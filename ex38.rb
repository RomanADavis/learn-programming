ten_things = "Apples Oranges Crows Telephones Light Sugar"

puts "Wait there are not ten things in that list. Let's fix that."

stuff = ten_things.split(' ')
more_stuff = ["Day", "Night", "Song" "Frisbee", "Corn", "Banana", "Girl", "Boy"]

#  using math to make sure there's ten imenso

while stuff.length != 10
  next_one = more_stuff.shift
  puts "Adding: #{next_one}"
  stuff << next_one
  puts "There are #{stuff.length} items now."
end

puts "There we go: #{stuff}"

puts "Let's do some things with stuff."

puts stuff[1]
puts stuff[-1] #last item
puts stuff.pop
puts stuff.join(' ')
puts stuff[3..5].join('#')
