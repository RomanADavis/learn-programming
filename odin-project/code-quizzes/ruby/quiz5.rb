# Object oriented programming (OOP) is at the core of Ruby, so even beginners
# need to know the basic OOP principles. OOP discussions tend to get abstract
# and I have made an effort to make this introduction concrete with examples.
#
# What is the value of the variable x?

x = String.new("i wish i was surfing")

# => "i wish i was surfing"

# Make the following object:
# "i though he said this wasn't going to be abstract..."

object = "i thought he said this wasn't going to be abstract"

# What does the following return?

"Hi".methods

# A big long list of methods for string objects (as symbols)

# What does the following return?

"hello".upcase

# => "HELLO"

# What does the following return?

"sUp DuDe".swapcase()

# => "SuP dUdE"

# What does this return?

"This is a sentence, kinda.".split()

# => ["This", "is", "a", "sentence,", "kinda."]

# What is the syntax for calling methods on string objects? Look at the
# previous examples and observe a pattern.

"some_string".some_method

# To recap, the String class makes string objects, and string objects have
# have access to methods like upcase() and downcase(). Create a string object
# with the text "road trip".

"road trip"

# What does this code return?

Array.new()

# => {}

# What does this code print?

my_array = Array.new()
my_array.push("nice")
my_array.push("hair")
puts my_array.inspect()

# ["nice", "hair"]

# What is a class?

# A name space with syntax to create objects. It also has variables and methods
# like any other class.

# What is an object?

# An allocated piece of memory that can have variables and has a special syntax
# to call methods. Objects are created from classes and so are "instances" of a
# class.

# How is a string object created?

# Two ways occur to me. Implicitly, where we just put some text between matching
# quotes:
"Here's a string"

# And explicitly, where we use the string class to create a string.
String.new("Also a string.")

# Create a new Hash object.

Hash.new()

{}

# Create an Array object and add two String objects to it: "fun" and "games".

array = []
array << "fun"
array << "games"

# What does the following code evaluate to?

my_string = String.new("special")
my_string.push("cool")

# It doesn't. There's no method for strings called push.

# What does the following code evaluate to?

a_string = String.new("ear")
a_string.class

# => String

# What does the following code to evaluate to?

an_array = Array.new()
an_array.class()

# => Array

# So far, we have explored classes defined by the Ruby programming language, but
# we cn also create our own classes.

# This code creates an Animal class.

class Animal
end

# Create an instance of the Animal class and assign it to the variable fido.

fido = Animal.new()

# This code is used to create the Dog class with a speak() method.

class Dog
  def speak()
    return("ruff ruff")
  end
end

# Create an instance of the Dog class and assign it to the variable spot. Then
# call the speak method on the spot dog object.

spot = Dog.new
spot.speak

# Define a Penguin class with a looks() method that returns "We are cute!".

class Penguin
  def looks
    "We are cute!"
  end
end

# The following code creates a Fish class with a general_overview() class
# method.

class Fish
  def self.general_overview()
    return("Fish  are animals that live in the sea.")
  end
end

# Call the general_overview() method on the Fish class.

Fish.general_overview

# Create a Calculator class with an add() method. Demonstrate how the add()
# method can be called to add two numbers.

class Calculator
  def add(x, y)
    x + y
  end
end

Calculator.new.add(36, 57)

# Here is how to define a Person class that is instantiated with a name.

class Person # Start a class definition
  def initialize(name) # Define how to create objects with a name argument
    @name = name # assign argument to the @name object variable
  end # ends object method definition
end # ends the class definition

# Identify the key components of the code.

# Here's how to create a person object with the name "Fred".

my_person_object = Person.new("Fred")

# Explain how the my_person_object was instantiated.

# Intitialize is automatically called with Person.new and assigns "Fred" to
# my_person_object's @name variable.

# Here is how to create a Lion class with a name instance variable and a method
# that returns the name.

class Lion
  def initialize(name)
    @name = name
  end

  def return_lions_name
    return(@name)
  end
end

simba = Lion.new("Simba")
put simba.return_lions_name() # Prints "Simba"

# Explain how return_lions_name() works

# initialize gives the Lion object a variable, while return calls it.

# Create a Celsius class which is initialized with a temperature.

class Celsius
  def initialize(temperature)
    @temperature = temperature
  end
end

# Add a method to_fahrenheit() to the Celsius class that converts the Celsius
# temperature to Fahrenheit. The formula to convert Celsius to Fahrenheit is the
# temperature in Celsius times 1.8 plus 32.

class Celsius
  def initialize(temperature)
    @temperature = temperature
  end

  def to_fahrenheit
    (@temperature * 1.8) + 32
end
