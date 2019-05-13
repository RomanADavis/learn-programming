def caesar_cypher(message, key)
  chars = message.chars.map do |char|
    limit = 26
    base = "A".ord if(char.upcase == char) && !(char.downcase == char)
    base = "a".ord if(char.downcase == char) && !(char.upcase == char)
    base ? (base + ((char.ord - base + key) % limit)).chr : char
  end

  chars.join
end