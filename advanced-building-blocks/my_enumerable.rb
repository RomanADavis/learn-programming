module Enumerable
  def my_each
    self.length.times {|index| yield(self[index])}
  end

  def my_each_with_index
    self.length.times {|index| yield(self[index], index)}
  end

  def my_select
    result = []
    self.each {|element| result << element if yield(element)}
    result
  end
end
