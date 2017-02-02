## Animal is a kind of okject
class Animal
end

## Dog is a kind of Animal
class Dog < Animal
  def initialize(name)
    ## Dogs name is set on initialization
    @name = name
  end
end

## Cat is a kind of animal
class Cat < Animal
  def initialize(name)
    ## A cat's name is set on inititialization
    @name = name
  end
end

## Person is a kind of object
class Person
  def initialize(name)
    ## Person has a name
    @name = name

    ## Person can have pets
    @pets = []
  end

  attr_accessor :pets
end

## Employee is a kind of person
class Employee < Person
  def initialize(name, salary)
    ## call Person to help initialize Employee
    super(name)
    ##  Has-a salary
    @salary = salary
  end
end

## Fish is a kind of object
class Fish
end

## Halibut is a kind of fish
class Halibut < Fish
end

## Salmon is a kind of fish
class Salmon < Fish
end

## rover is-a dog
rover = Dog.new("Rover")

## satan is a Cat
satan = Cat.new("Satan")

## mary is a Person
mary = Person.new("Mary")

## Satan is a pet of Mary's
mary.pets << satan

## A new employee has the name "Frank" and a salary 120_000
frank = Employee.new("Frank", 120_000)

## Rover is added to Frank's pets
frank.pets << rover

## Flipper is a new Fish
flipper = Fish.new

## crouse is a new Salamon
crouse = Salmon.new

## Harry is a new Halibut
harry = Halibut.new
