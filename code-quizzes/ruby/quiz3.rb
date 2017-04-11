# What does this code print?

x = "HELLO"

if true
  put x
end

# It prints hello, since an if statement that takes true will always execute
# its block.

# What does this code print?

if true
  y = "Baaaaaah"
end
puts y

# It prints "Baaaaaah" for the same reason.

# Identify the elements of this code:

def my_name() # Start of a function declaration
  return("Zoo Lander") # Explicit return with parenthesis
end # End of a function declaration

puts my_name() # function call that print whatever is return by the function.

# What does the following code return?

def add(x, y)
  return(x + y)
end

add(3, 5)

# 8

# What does the following code print?

y = 10
def add_one_to_variable(y)
  variable += 1
  return(variable)
end

puts add_one_to_variable(y)

# "11"

# What does the following code print?

cool = "Beans"
def dinner_plans()
  puts cool
end

dinner_plans()

# It can't print anything. The program gives an error since cool is not defined
# inside of dinner_plans() and cool is not global.

# What does the following code print?

def blah()
  my_var = "my var has been defined"
end

puts my_var

# It can't print anything, since my_var is not defined in the global scope.

# What does the following code print?

def cray()
  lyric = "Stuff is cray cray"
  puts lyric
end

cray()

# "Stuff is cray cray"

# What does the following code print?

def first_name()
  return("Otto")
end

def last_name()
  return("Mation")
end

def full_name()
  first_name() + " " + last_name()
end

puts full_name()


# "Otto Mation"

# What does the following code print?

def square_of_number(number)
  return(number * number)
end

def cube_of_number(number)
  return(number * square_of_number(number))
end

puts cube_of_number(2)

# 8

# Define a method that multiplies two numbers together.

def multiply(a, b)
  a * b
end

# Define a method called silly_check() that takes a number as an argument and
# returns "The number is less than 5" if the number is less than 5, and returns
# "The number is greater than or equal to 5" otherwise.

def silly_check(number)
  return "The number is less than 5" if (number < 5)
  "This number is greater than of equal to 5"
end

# Make a method called funify that takes an array and adds the word "fun" to the
# end of the array.

def funify(array)
  array << "fun"
end

# Define a method called more_fun() that takes an array and replaces the first_name
# element with the word "FUN FUN"

def more_fun(array)
  array[0] = "FUN FUN"
end

# Define a method called increment_value() that takes a variable as an argument
# adds 1 to it.

def increment_variable(variable)
  variable + 1
end
