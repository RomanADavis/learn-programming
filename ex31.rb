def input
  print "> "
  $stdin.gets.chomp.downcase
end

def start
  puts "You enter a dark room with two doors. Do you want to go through door #1 or door #2?"
  case input
  when "1" then door1
  when "2" then door2
  else puts "You stumble around and fall on a knife and die. Good job!"
  end
end

def door1
  puts "There's a giant bear eating a cheese cake. What do you do?"
  puts "1. Take the cake."
  puts "2. Scream at the bear."

  bear(input)
end

def door2
  puts "You stare directly at Cthulhu's retina."
  puts "1. Blueberries."
  puts "2. Yellow jacket clothespins."
  puts "3. Understand revolvers yelling melodies."

  insanity(input)
end

def bear(choice)
  case choice
  when "1" then puts "The bear eats you face off. Goot job!"
  when "2" then puts "The bear eats your legs off. Good job!"
  else
    puts "Well, doing %s is probably better. Bear ran away." % choice
    puts "Eat the bear cake?y/N"
    cake(input)
  end
end

def cake(choice)
  case choice
  when "y" then puts "You are decapitated by a bear trap. Why did you think a bear had a cake anyaway?"
  when "n" then puts "You're on a diet. You win. But you're still hungry."
  else puts "You starve in your indecisiveness."
  end
end

def insanity(choice)
  if choice == "1" || choice == "2"
    puts "Your body survives powered by a mind of jello. Good job!"
  else
    puts "The insanity rots your eyes into a pile of muck. Good job!"
  end
end

start
