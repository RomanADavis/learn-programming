class Lexicon
  @@directions = ["north", "east", "south", "west", "up", "down"]
  @@stops = ["a", "I", "in", "the", "at", "to", "of"]
  @@nouns = ["bear", "princess"]
  @@verbs = ["move", "go", "kill", "taunt"]

  def self.scan(sentence)
    words = tokenize(sentence)
    words.map {|word| categorize(word)}
  end

  def self.tokenize(sentence)
    sentence.split(" ")
  end

  def self.categorize(word)
    return ["direction", word] if @@directions.include? word
    return ["stop", word] if @@stops.include? word
    return ["noun", word] if @@nouns.include? word
    return ["number", word.to_i] if word.to_i.to_s == word
    ["error", word]
  end
end
