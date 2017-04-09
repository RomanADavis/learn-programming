def caesar_cypher(string, shift_factor)
  string.chars.map {|char| character_shift(char, shift_factor)}.join
end

def character_shift(char, shift_factor)
  shift_factor.times {char = shift(char)}
  char
end

def shift(char)
  return char.next! if char =~ /[a-yA-Y]/
  char = "a" if char == "z"
  char = "A" if char == "Z"
  char
end

puts caesar_cypher("What a string!", 5)
