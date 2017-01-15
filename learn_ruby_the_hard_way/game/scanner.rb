class Scanner
  def input
    print "> "
    pares($stdin.gets.chomp}
  end

  def parse(text)
    text = tokenize(text)
    
  end

  def takenize(text)
    text.split(" ")
  end
end
