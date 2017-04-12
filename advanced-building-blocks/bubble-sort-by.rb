def bubble_sort_by(array)
  sorted = false
  until sorted
    sorted = true
    (array.length - 1).times do |index|
      if yield(array[index], array[index + 1]) > 0
        array[index], array[index + 1] = array[index + 1], array[index]
        sorted = false
      end
    end
  end
end


bubble_sort_by(test = ["hi","hello","hey"]) do |left,right|
  left.length - right.length
end
p test
