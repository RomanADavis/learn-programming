def add(a, b)
  puts "ADDING #{a} + #{b}"
  a + b
end

def subtract(a, b)
  puts "SUBTRACTING #{a} - #{b}"
  a - b
end

def multiply(a, b)
  puts "MULTIPLYING #{a} * #{b}"
  a * b
end

def divide(a, b)
  puts "DIVIDING #{a} / #{b}"
  a / b
end

puts "Let's do some math with just functions:"

age = add(20, 7)
height = subtract(70, 5)
weight = multiply(80, 2)
iq = divide(2000, 1)

puts "Age: #{age}, Height: #{height}, Weight: #{weight}, IQ: #{iq}"


puts "Here is a puzzle."
what = add(age, (subtract(height, multiply(weight, divide(iq, 2)))))

puts "That becomes #{what}. Can you do it by hand?"
#age + (height - (weight * (iq / 2)))
#27 + (65 - (160 * (2000 / 2)))
#27 + 65 - 160_000
#-159_908, I think. :/
#Success!

#5 * 12 + 5 should be
puts add(multiply(5, 12), 5)
