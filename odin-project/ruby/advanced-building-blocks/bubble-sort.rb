def bubble_sort(array)
  sorted = false
  until sorted
    sorted = true
    (array.length - 1).times do |index|
      if array[index + 1] < array[index]
        array[index], array[index + 1] = array[index + 1], array[index]
        sorted = false
      end
    end
  end
  array
end

p bubble_sort([4,3,78,2,0,2])
