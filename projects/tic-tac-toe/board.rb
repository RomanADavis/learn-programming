class Board
  attr_accessor :cells
  def initialize
    self.cells = Array.new(3) {Array.new(3) {""}}
  end

  def draw
    number = 0
    self.cells.each do |row|
      row.each do |cell|
        number += 1
        print " #{cell.empty? ? number : cell} "
      end
      puts ""
    end
  end

  def coordinates(number)
    adjustment = self.cells.length - 1
    y = ((number + adjustment) % self.cells.length)
    x = ((number + adjustment) / self.cells.length) - 1
    #p [x, y]
    [x, y]
  end

  def [](number)
    x, y = coordinates(number)
    self.cells[x][y]
  end

  def []=(number, value)
    x, y = coordinates(number)
    self.cells[x][y] = value
  end

  def horizontal_win?
    self.cells.each do |row|
      return row.first if row.uniq.length == 1 && !row.first.empty?
    end
    false
  end

  def vertical_win?
    self.cells.length.times do |index|
      column = self.cells.map {|row| row[index]}
      return column.first if column.uniq.length == 1 && !column.first.empty?
    end
    false
  end

  def diagonal_win?
    forward = self.cells.map.with_index {|row, index| row[index]}
    backward = self.cells.reverse.map.with_index {|row, index| row[index]}
    return forward.first if forward.uniq.length == 1 && !forward.first.empty?
    return forward.first if backward.uniq.length == 1 && !backward.first.empty?
    false
  end

  def full?
    self.cells.each do |row|
      row.each {|cell| return false if cell.empty? }
    end
    "The cat"
  end
end
