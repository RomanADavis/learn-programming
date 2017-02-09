people = 20
cats = 30
dogs = 15

if people < cats
  puts "That's too many cats! The world is doomed!"
end

puts "Not many cats. The world is saved!" if people > cats

puts "The world is drooled on!" if dogs > people

puts "The world is dry!" if people > dogs

dogs += 5

puts "People are equal to or greater than dogs." if people >= dogs

puts "People are equal to or less than dogs." if people <= dogs

puts "Peole are dogs" if people == dogs

### Answers
# if takes an argument and a block. If the argument reduces to nil or false, tne
#code doesn't run. Otherwise it does run.
#
# In ruby, indentation inside a a block is to make it easier to read and to look
#at. Unlike python, ruby code will run just fine without indentation. (But you
#should do it anyway.)
#
# You can use any expression as an argument in an if statement, but you'll get a
#warning if you assign a variable, because of the easy confusion between = and
#==.
#
# Changing the values of the variables at the top may result in the arguments
#taken by the ifs to reduct to different values. This may result in different
#blocks being executed, printing different things.
