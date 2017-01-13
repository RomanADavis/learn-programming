the_count = [1, 2, 3, 4, 5]
fruits = ['apples', 'oranges', 'pears', 'apricots']
change = [1, 'pennies', 2, 'dimes', 3, 'quarters']

# this first kind of for-loop goes through a list in a more traditional style
# found in other languages

for number in the_count
  puts "The count is #{number}."
end

# Same as above but in a more Ruby style. This and the next one are the prefered
# way that ruby for-loops are written.
fruits.each do |fruit|
  puts "A fruit of type #{fruit}."
end

# Also, we go through a mixed list too. Note this is yet another style, exactly
# like above but with a different syntax.
change.each {|i| puts "I got #{i}"}

# We can also build lists. First start with an emply one.
elements = []

# Then use the range operator to do 0 ti 5 counts
(0..5).each do |i|
  puts "Adding #{i} to the list."
  # pushes the i to the end of the list.
  elements.push(i)
end

# Now we can print them out too.
elements.each {|i| puts "Element was #{i}"}
