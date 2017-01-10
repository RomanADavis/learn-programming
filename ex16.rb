filename = ARGV.first

puts "We're going to erase #{filename}."
puts "if you don't want that, hit CTRL-C (^C)."
puts "If you don't want that, hit return."

$stdin.gets

puts "Opening the file..."
target = open(filename, "w")

puts "Truncating the file. Goodbye!"
target.truncate(0)

puts "Now, I'll ask you for three lines."

print "line 1:"
line1 = $stdin.gets.chomp
print "line 2:"
line2 = $stdin.gets.chomp
print "line 3:"
line3 = $stdin.gets.chomp

target.write("#{line1}\n#{line2}\n#{line3}\n")

puts "And finally, we close it."
target.close
