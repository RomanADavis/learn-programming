module Enumerable
  def my_each
    self.length.times {|index| yield(self[index])}
  end

  def my_each_with_index
    self.length.times {|index| yield(self[index], index)}
  end

  def my_select
    result = []
    self.my_each {|element| result << element if yield(element)}
    result
  end

  def my_all?
    self.my_each {|element| return false unless yield(element)}
    true
  end

  def my_any?
    self.my_each {|element| return true if yield(element)}
    false
  end

  def my_none?
    !my_any?
  end

  def my_count
    total = 0
    self.my_each {|element| total += 1 if yield(element)}
    total
  end

  def my_map(proc = nil)
    result = []
    self.my_each {|element| result << proc.call(element)} if proc
    self.my_each {|element| result << yield(element)} if !proc
    result
  end

  def my_inject
    total = 0
    self.my_each {|element| total = yield(element)}
    total
  end
end
