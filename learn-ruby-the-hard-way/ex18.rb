# this one is like your script of ARGV
def print_two(*args)
  arg1, arg2 = args
  puts "arg1: #{arg1}, arg2: #{arg2}"
end

# okay, that args is pointless, you can jost do this
def print_two_again(arg1, arg2)
  puts "arg1: #{arg1}, arg2: #{arg2}"
end

# this just takes one argument
def print_one(arg)
  puts "arg: #{arg}"
end

# this takes no arguments
def print_none()
  puts "I got nothin'"
end

print_two("Roman", "Davis")
print_two_again("Roman", "Davis")
print_one("First!")
print_none()
