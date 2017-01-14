class inventory
  def initaialize
    @contents = {}
  end

  def take(item)
    @contents[item] ? @contents[item] += 1 : @contents.merge!(item => 1)
  end

  def drop(item)
    @content[item] > 1 ? @content[item] -= 1 : @contiets.delete(item) 
  end
end
