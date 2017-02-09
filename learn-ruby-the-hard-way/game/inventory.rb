class Inventory
  def initaialize
    @contents = {}
  end

  def add(item)
    @contents[item] ? @contents[item] += 1 : @contents.merge!(item => 1)
  end

  def lose(item)
    @content[item] > 1 ? @content[item] -= 1 : @contiets.delete(item)
  end
end
