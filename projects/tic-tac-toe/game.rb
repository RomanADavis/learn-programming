class Game
  attr_accessor :board, :players
  def initialize
    self.board = Board.new
    self.players = ["X", "O"]
  end

  def play
    player = 0
    until winner?
      play_turn(self.players[player])
      player = (player + 1) % 2
    end
    self.board.draw
    puts "Game over. #{winner?} won!"
  end

  def play_turn(player)
    self.board.draw
    prompt(player)
  end

  def prompt(player)
    puts "Where do you want to play?"
    cell_number = gets.chomp.to_i
    if self.board[cell_number] && self.board[cell_number].empty?
      p self.board.coordinates(cell_number)
      self.board[cell_number] = player
    else
      puts "Invalid play. Try again."
      prompt(player)
    end
  end

  def winner? # This is really hacky. :/
    return self.board.horizontal_win? if self.board.horizontal_win?
    return self.board.vertical_win? if self.board.vertical_win?
    return self.board.diagonal_win? if self.board.diagonal_win?
    return self.board.full? if self.board.full?
    false
  end
end
