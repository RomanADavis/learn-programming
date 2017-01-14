def gold_room
  puts "This a room full of gold. How much will you take?"

  value = input
  dead("  Man, learn to type a number.") unless value.to_i.to_s == value
  if value.to_i > 50
    dead("You dug too greedily and too deep.")
  else
    puts "You're not greedy, you win!"
    exit(0)
  end
end

def bear_room
  puts "There is a bear here."
  puts "The bear has a bunch of honey."
  puts "The fat bear is in front of another door."
  puts "How are you going to the bear?"
  bear_moved = false

  loop do
    case input
    when /honey/ then dead("The bear slaps your face off.")
    when /taunt/
      dead("The bear is pissed. He chems your leg off.") if bear_moved
      puts "The bear moves. The door is wide open!"
      bear_moved = true
    when /door/
       gold_room if bear_moved
       puts "The bear is in the way."
    else puts "I have no idea what that means."
    end
  end
end

def cthulhu_room
  puts "Here you see the great Cthulhu."
  puts "He, it, whatever stares at you and you go insane."
  puts "Do you flee or eat your own head?"

  case input
  when /flee/ then start
  when /head/ then dead("Well, that was tasty.")
  end
end

def dead(why)
  puts why, "Good job!"
  exit(0)
end

def start
  puts "Your are in a dark room."
  puts "There is a door to your right and left."
  puts "Which one will you take?"

  case input
  when "left" then bear_room
  when "right" then cthulhu_room
  else dead("You stumble around until you starve. ")
  end
end

def input
  print "> "
  $stdin.gets.chomp
end

start

#
# bear <-- start <--> cthulhu
#  |
#  V
# gold
#
#
#
#
#
#
