module Enumerable
  def my_each
    length.times {|index| yield(self[index])}
  end

  def my_each_with_index
    length.times {|index| yield(self[index], index)}
  end

  def my_select
    result = []
    my_each {|element| result << element if yield(element)}
    result
  end

  def my_all?
    my_each {|element| return false unless yield(element)}
    true
  end

  def my_any?
    my_each {|element| return true if yield(element)}
    false
  end

  def my_none?
    !my_any?
  end

  def my_count
    total = 0
    my_each {|element| total += 1 if yield(element)}
    total
  end

  def my_map(proc = nil)
    result = []
    my_each {|element| result << proc.call(element)} if proc
    my_each {|element| result << yield(element)} if !proc
    result
  end

  def my_inject
    total = 0
    my_each {|element| total = yield(element)}
    total
  end
end
