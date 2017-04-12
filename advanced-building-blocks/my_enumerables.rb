module Enumerable
  def my_each
    self.length.times {|index| yield(self[index])}
  end
end
