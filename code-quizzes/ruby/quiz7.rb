# Ceate a Dog class that is initialized with a name.

class Dog
  def initialize(name)
    @name = name
  end
end

# Create a new instance of the Dog class

Dog.new("Fido")

# Add a bark() instance method to the Dog class that returns "Ruff ruff"

class Dog
  def bark()
    "Ruff ruff"
  end
end

# Create an instance of the Dog variable and call the bark() method.

Dog.new("Fido").bark()

class Person
  def initialize(name, age)
    @name = name
    @age = age
  end
end

# What does the following code return?

bob = Person.new("Bob", 22)
bob.speak()

# Should raise an error because there's no speak method for Person objects.

class Insect
  def intitialize(age_in_days)
    @age_in_days = age_in_days
  end
end

# Add an instance method to insect class to calculate age in years.

class Insect
  def age_in_years
    @age_in_days.to_f / 365
  end
end

class Dog
  def speak()
    return("woof woof")
  end
end

# What does the following ruby code display?

Dog.speak()

# No method error, because the Dog class does not have a speak method, Dog
# instances do.

# Create a Lamp class with a class method called about_me that returns the
# String "We brighten up people's lives".

class Lamp
  def self.about_me
    "We brighten up people's lives"
  end
end

class WaterBottle
  def initialize(size)
    @size = size
  end
end

# Add a method to the WaterBottle class and demonstrte how this method can be
# used.

class WaterBottle
  def size
    @size
  end
end

WaterBottle.new("16.9 ounces").size

# Create a Person class that is initialized with an age and create an age=()
# method that can be used to update the @age instance variable. Also include an
# age method that returns the value of the @age instance variable. Demonstrate
# how the methods can be used.

class Person
  def initialize(age)
    @age = age
  ends

  def age=(age)
    @age = age
  end

  def age
    @age
  end
end

me = Peron.new(27)
me.age = 28
me.age



class Person
def initialize(age)
  @age = age
end

def age=(new_age)
  @age = new_age
end

def age()
  return(@age)
end
end

# Modules define methods that can be added to classes. Modules are useful for
# organizing code and for code that can be reused in multiple classes. Unlike
# classes, Modules cannot be instantiated (i.e. Modules cannot be used to create
# objects).

module Clueless
  def funny()
    return("AS IF?!")
  end
end

class Actress
  include Clueless
end

# What does this code return?
alicia = Actress.new
alicia.funny()

# => "AS IF?"

module HappyHappy
  def say_something()
    return("Happy happy, joy joy")
  end
end

class Person
  include HappyHappy
end

class Alien
  include HappyHappy
end

# Demonstrate that instances of the Person class and instances of the Alien
# class can use the say_something() method.

Person.say_something
Alien.say_something

# Create a module called MathHelper with a method multiply_by_two() that takes a
# number as an argument and multiplies it by two. Create a class called Homework
# and demonstrate how multiply_by_two() can be used.

module MathHelper
  def self.multiply_by_two(number)
    number * 2
  end
end

class Homework
  include MathHelper
end

Homework.multiply_by_two(3)

# Inheritance is a way for classes to access all the methods from a parent
# class. Inheritance is a great way for a class to get all the methods from a
# parent class and add some extra ones. In the following example, the Dog class
# inherits from the Mammal class.

class Mammal
  def heartbeat?
    true
  end
end

class Dog < Mammal
end

# Demonstrate that instances of the Dog class have access to the heartbeat?
# method.

Dog.heartbeat?

# The ancestors() class method demonstrates all the classes that a class
# inherits from. Show all the classes that the Array class inherits from.

Array.ancestors
# => [Array, Enumerable, Object, Kernel, BasicObject]

class Box
end

my_box = Box.new

# Explain how my_box.methods().count() returns a number greater than 50, even
# though no methods are defined in the Box class.

# It inherits those methods from it's ancestors.

# Create a BaseballPlayer class that is initialized with hits, walks, and
# at_bats. Add a batting_average() method that returns hits divided by at_bats
# as a floating point number. Add an on_base_percentage() method that returns
# (hits + walks) divided by at_bats as a floating point number. Demonstrate how
# the batting_average() and on_base_percentage() methods can be used.

class BaseballPlayer
  def initialize(hits, walks, at_bats)
    @hits = hits
    @walks = walks
    @at_bats = at_bats
  end

  def batting_average
    @hits.to_f / @at_bats
  end

  def base_percentage
    (@hits + @walks).to_f / @at_bats
  end
end

dude = BaseballPlayer.new(100, 50, 200)
dude.batting_average
dude.base_percentage

# Create a Person class that is initialized with a first_name and last_name.
# Create first_name() and last_name() methods that return the values of the
# corresponding instance variables. Create a full_name() method that
# concatenates the first_name and last_name in a single string.

class Person
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  def first_name
    @first_name
  end

  def last_name
    @last_name
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end
end

# Create a module called MathHelpers with the exponent() method that takes a
# two numbers as arguments and raises the first number to the power of the
# second number. Create a class called Calculator with a method called
# square_root() that takes the square root of the number (raises it to the
# power of 0.5). The square_root() method should use the exponent() method.

module MathHelpers
  def exponent(a, b)
    a ** b
  end
end

class Calculator
  include MathHelpers

  def square_root(number)
    number ** 0.5
  end
end
