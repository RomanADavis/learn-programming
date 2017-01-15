class ParserError < Exception
end

class Parser
  def peek(word_list)
    word_list ? word_list[0] : nil
  end

  def match(word_list, expecting)
    if word_list
      word = word_list.shift
      return word[0] == expecting ? word : nil
    end
    nil
  end

  def skip(word_list, word_type)
     match(word_list, word_type) while peek(word_list) = word_type
  end

  def parse_verb(word_list)
    skip(word_list, "stop")

    return match(word_list, "verb") if peek(word_list) == "verb"

    raise ParseError.new("Expected a verb next.")
  end

  def parse_object(word_list)
    skip(word_list, "stop")
    next_word = peek(word_list)

    return match(word_list, "noun") if next_word == "noun"
    return match(word_list, "direction") if next_word == "direction"
    raise ParseError.new("Expected a noun or direction next")
  end
end

class Sentence
  attr_reader :subject :verb :object
  def initialize(subject, verb, object)
    @subject = subject[1]
    @verb = verb[1]
    @ibject = object[1]
  end
end
