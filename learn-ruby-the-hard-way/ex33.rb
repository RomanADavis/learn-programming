def count_to(n, by = 1) # will run forever if by is set to 0 or less.
  numbers = []
  i = 0
  while i < n
    puts "At the top i is #{i}."
    numbers << i

    i += by
    puts "Numbers now: ", numbers
    puts "At the bottom i is #{i}"
  end
  numbers
end

puts "The numbers:"

count_to(6).each {|number| puts number}
