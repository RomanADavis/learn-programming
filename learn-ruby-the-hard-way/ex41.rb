require "open-uri"

WORD_URL = "http://learncodethehardway.org/words.txt"
WORDS = []

PHRASES = {
  "class ### < ###\nend" =>
        "Make a class called ### that is-a ###.",
  "class ###\n\tdef initialize(@@@)\n\tend\nend" =>
        "class ### has-a intitialize that take @@@ parameters.",
  "class ###\n\tdef ***(@@@)\n\tend\nend" =>
        "class ### has a function *** that takes @@@ parameters.",
  "*** = ###.new()" =>
        "Smt *** to a new instance of class ###.",
  "***.***(@@@)" =>
        "From *** get the *** method, and call it with parameters @@@.",
  "***.*** = '***'" =>
        "From *** get the *** attribute and set it to ***"
}

PHRASE_FIRST = ARGV.first ? ARGV.first.downcase == "english" : false

open(WORD_URL) do |f|
  f.each_line {|word| WORDS.push(word.chomp)}
end

def craft_names(rand_words, snippet, pattern, caps=false)
  names = snippet.scan(pattern).map do
    word = rand_words.pop
    caps ? word.capitalize : word
  end

  return names * 2
end

def craft_params(rand_words, snippet, pattern)
  names = (0...snippet.scan(pattern).length).map do
    param_count = rand(1..4)
    params = (0...param_count).map {|_| rand_words.pop()}
    params.join(", ")
  end

  return names * 2
end

def convert(snippet, phrase)
  rand_words = WORDS.shuffle
  class_names = craft_names(rand_words, snippet, /###/, caps=true)
  other_names = craft_names(rand_words, snippet, /\*\*\*/)
  param_names = craft_params(rand_words, snippet, /@@@/)

  results = []

  [snippet, phrase].each do |sentence|
    # copy of sentence with fake class names
    result = sentence.gsub(/###/) {|x| class_names.pop}

    # fake other names
    result.gsub!(/\*\*\*/) {|x| other_names.pop}

    # fake parameter list
    result.gsub!(/@@@/) {|x| param_names.pop}

    results.push(result)
  end

  results
end

 # Keep going until the user cancels out of the program with CTRL + D
 loop do
   snippets = PHRASES.keys().shuffle

   for snippet in snippets
     phrase = PHRASES[snippet]
     question, answer = convert(snippet, phrase)

     question, answer = answer, question if PHRASE_FIRST

     print question, "\n\n>"

     exit(0) unless $stdin.gets

     puts "\nANSWER: %s\n\n" % answer
   end
 end
