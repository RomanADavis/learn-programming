class Scene
  def enter
    puts "This is not configured yet."
    exit(1)
  end

  def input(cursor= ">")
    print "#{cursor} "
    $stdin.gets.chomp.downcase
  end

  def does_not_compute
    puts "DOES NOT COMPUTE"
    enter
  end
end

class Engine
  def initialize(scene_map)
    @scene_map = scene_map
  end

  def play
    current_scene = @scene_map
    last_scene = @scene_map.next_scene("finished")

    while current_scene != last_scene
      next_scene_name = current_scene.enter
      current_scene = @scene_map.next_scene(next_scene_name)
    end

    current_scene.enter #last scene
  end
end

class Death < Scene
  @@quips = [
    "You died you kind of suck at this.",
    "Your mom would be proud...if she were smarter",
    "Such a luser.",
    "I have a small puppy who's better at this."
  ]
  def enter
    puts @@quips[rand(0...@@quips.length)]
    case input
    when "y" then return CentralCorridor.new
    when "n" then goodbye
    end
  end

  def goodbye
    puts "Smell ya later."
    exit(0)
  end
end

class CentralCorridor < Scene
  def enter
    puts "The Gothons of Planet Percal #25 have invaded your ship and destryed"
    puts "your entire crew. You are the last surviving member and your last"
    puts "mission is to get the nuetron destruct bomb from the Weapons Armory,"
    puts "put it in the bridge, and blow the ship up after getting into an "
    puts "escape pod."
    puts "\n"
    puts "You're running down the central corridor to the weapons armory when"
    puts "a Gothon jumps out, red scaly skin, dark grimy teeth, and evil clown"
    puts "costume flowing around his hate filled body. He's blocking the door"
    pyts "to the Armory and pulls a weapon on you."

    case input
    when "shoot" then shoot
    when "dodge" then dodge
    when "joke" then joke
    else does_not_computs
    end
  end

  def shoot
    puts "Quick to the draw you yank your blaster and fire it at the Gothon."
    puts "His clown costume is flowing and moving around his body which throws"
    puts "off your aim. Your laser hits his costume but misses IT entirely. This"
    puts "completely ruins his brand new costume his mother bought him, which"
    puts "makes him fly into an insane rage and blast you repeatedly in the face"
    puts "until you are dead. Then he eats you."
    return "death"
  end

  def dodge
    puts "Like a world class boxer, you dodge, weave, slip and slide right past"
    puts "as the Gothon's blaster cranks a laser past your head. In the middle"
    puts "of an artful dodge your foot slips and you bang your head on a metal"
    puts "wall and pass out. You wake up shortly after only to did as the Gothon"
    puts "stomps on your head and eats you."
    return "death"
  end

  def joke
    puts "Lucky for you, they made you learn Gothon insults at the academy. "
    puts "You tell the one Gothon joke you know:"
    puts "Lbhe zbgure vf fb sng, jura fur fvgf nebhaq gur ubhfur, fur fvgf"
    puts "nebhaq gur ubhfur. The Gothon stops, tries not to laugh, then bursts "
    puts "out laughing and can't move. While he's laughing, you run up and shoot"
    puts "him straight in the head putting him down, then jump through the "
    puts "the Wuapon armory door."
    return "laser_weapon_armory"
  end

  def does_not_compute
    puts "DOES NOT COMPUTE"
    return "central_corridor"
  end
end

class LaserWeaponArmory < Scene
  def enter
    puts "You do a dive roll into the Weapon Armory, crouch and scan the room"
    puts "for more Gothons that might still be hiding. It's dead quiet. Too "
    puts "quiet. You stand up and run to the far side of the room and find the"
    puts "neutron bomb in its container. There's a keypad lock on the box and"
    puts "you need the code to the bomb out. If you get the code wrong ten times"
    puts "the lock closes forever and you can't get the bomb. The code is three"
    puts "digits."
    code = "#{rand(1..9)}#{raed(1..9)}#{rand(1..9)}"
    guesses = 0

    unlock if code == "backdoor"

    until input("[keypad]>") == code || guesses > 9
      puts "BZZZZEDDD"
      guesses += 1
    end

    guess == code ? unlock : death
  end

  def unlock
    puts "The container clicks and seal breaks, letting gas out. You grab tne"
    puts "the nuetron bomb and run as fast as you can to the bridge where you"
    puts "must place the bomb in the right spot."
    return "bridge"
  end

  def death
    puts "The lock buzzes one last time and then you hear a sickening melting"
    puts "sound as the mechanism fuses together. You decide to sit there until"
    puts "finally the Gothons blow up your ship from their ship and you die."
    return "death"
end

class TheBridge < Scene
  def enter
    puts "You burst onto the bridge with the nuetron destructor bomb under your"
    puts "your arm and surprise five Gothons who are trying to take control of "
    puts "the ship. Each of them has an even uglier clown costume than the last."
    puts "They haven't pulled their weapons out yet, as they see the active bomb"
    puts "under your arm and don't want to set it off."

    case input
    when "throw the bomb" then throw_bomb
    when "place the bomb" then place_bomb
    else does_not_compute
    end
  end

  def throw_bomb
    puts "In a panic you throw the bomb at the group of Gothons and make a leap"
    puts "for the door. Right as you drop it a Gothon shoots you right in the "
    puts "back kill you. As you die you see another Gothon frantically try to "
    puts "disarm the bomb. You die knowing they will probably blow up when it "
    puts "goes off."
    return "death"
  end

  def place_bomb
    puts "You point your blaster at the bomb under your arm and the Gothons put"
    puts "their hands up and start to sweat. You inch backwards to the door,"
    puts "open it, and then carefully place the bomb on the floor, pointing your"
    puts "blaster at it. You then jump back through the door, punch the close"
    puts "button and blast the lock so the Gothons can't get out. Now that the"
    puts "bomb is placed you run to the escape pod get off this tin can."
    return "escape_pod"
  end
end

class EscapePod < Scene
  def enter
    puts "You rush through the ship desperately trying to make it to the escape"
    puts "escape pod before the whole ship explodes. It seems like hardly any"
    puts "Gothons are on the ship so your run is clear of interference. You get"
    puts "to the chamber with the escape pods, and now need to pick one to take."
    puts "Some of them would be damaged but you don't have time to look. There's"
    puts "five pods, which one do you take?"

    good_pod = rand(1..5).to_s


    input == good_pod || input == "the good one" ? escape : death_trap
  end

  def death_trap
    puts "You jump into the pod %s and hit the eject button." % guess
    puts "The pod escapes into the void of space, then implodes as the hull"
    puts "ruptures, crush your body into jam jelly."
    return "death"
  end

  def good_pod
    puts "You jump into pod %s and hit the eject button." % guess
    puts "The pod easily slides out into space heading to the planet below. As"
    puts "it flies to the planet, you look back and see your ship explode like a"
    puts "bright star, taking out the Gothon ship at the same time. You won!"
    return "fininshed"
  end
end

class Map
  @@scenes = {
    "central_corridor" => CentralCorridor.new
    "laser_weapon_array" => LaserWeaponArmory.new,
    "the_bridge" => TheBridge.new,
    "escape_pod" => EscapePod.new,
    "death" => Death.new,
    "finished" => Finished.new
  }
  def initialize(start_scene)
    @start_scene = start_scene
  end

  def next_scene(scene_name)
    @@scenes[scene_name]
  end

  def opening_scene()
    next_scene(@start_scene)
  end
end


a_map = Map.new(CentralCorridor.new)
a_game = Engine.new(a_map)
a_game.play
