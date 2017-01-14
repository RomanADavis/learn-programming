module Ex25

  #This method will break up words for us.
  def Ex25.break_words(stuff)
    words = stuff.split(' ')
    return words
  end

  # Sorts the words.
  def Ex25.sort_words(words)
    return words.sort
  end

  # Eats and prints the first word
  def Ex25.print_first_word(words)
    word = words.shift
    puts word
  end

  # Eats and prints the last word
  def Ex25.print_last_word(words)
    word = words.pop
    puts word
  end

  # Takes a full sentence and returns sorted words.
  def Ex25.sort_sentence(sentence)
    words = Ex25.break_words(sentence)
    return Ex25.sort_words(words)
  end

  # Prints the first and last word of a sentence
  def Ex25.print_first_and_last(sentence)
    words = Ex25.break_words(sentence)
    Ex25.print_first_word(words)
    Ex25.print_last_word(words)
  end

  # Sorts the words and prints the first and last one
  def Ex25.print_first_and_last_sorted(sentence)
    words = Ex25.sort_sentence(sentence)
    Ex25.print_first_word(words)
    Ex25.print_last_word(words)
  end
end
