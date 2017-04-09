def substrings(string, dictionary)
  substrings = {}
  dictionary.each do |word|
    substrings[word] = string.scan(word).size if string.scan(word).size > 0
  end
  substrings
end

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low",
              "own","part","partner","sit"]

p substrings("below", dictionary)
p substrings("Howdy partner, sit down! How's it going?", dictionary)
