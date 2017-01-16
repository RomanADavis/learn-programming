class Parser
  attr_reader :word_list
  def initialize(sentence)
    @word_list = Lexicon.scan(sentence)
  end


  def peek
    @word_list ? @word_list[0] : nil
  end

  def match(expecting)
    if @word_list
      word = @word_list.shift
      return word[0] == expecting ? word : nil
    end
    nil
  end

  def skip(word_type)
     match(@word_list, word_type) while peek(@word_list) == word_type
  end

  def next_word
    skip(@word_list, "stop")
    peek(@word_list)
  end

  def parse_verb
    return match(@word_list, "verb") if next_word(@word_list) == "verb"

    raise ParseError.new("Expected a verb next.")
  end

  def parse_object
    word = next_word

    return match(@word_list, "noun") if word == "noun"
    return match(@word_list, "direction") if word == "direction"
    raise ParseError.new("Expected a noun or direction next")
  end

    def parse_subject
    word = next_word

    return match(word, "noun") if word == "noun"
    return ["noun", "player"] if word == "verb"
    raise ParseError.new("Expected a verb or noun")
  end

  def parse_sentence
    subject = parse_subject
    verb = parse_verb
    object = parse_object

    Sentence.new(subject, verb, object)
  end
end
