the_count = [1, 2, 3, 4, 5]
fruits = ['apples', 'oranges', 'pears', 'apricots']
change = [1, 'pennies', 2, 'dimes', 3, 'quarters']

# this first kind of for-loop goes through a list in a more traditional style
# found in other languages

the_count.each do |number|
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
  elements << i
end

# Now we can print them out too.
elements.each {|i| puts "Element was #{i}"}

# There are two flavors of the range operator ".." inclusive, and "..." exclusive
# they each create a range, which is exactly what it sounds like, an object that
# hold a range from one letter or number to another. Ranges will not work with
# floats, however. You can iterate on a range with #each like an array, but it
# doesn't quite have all the powers of an array, unfortunately.
