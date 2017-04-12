module Enumerable
  def my_each
    self.length.times {|index| yield(self[index])}
  end

  def my_each_with_index
    self.length.times {|index| yield(self[index], index)}
  end
end
