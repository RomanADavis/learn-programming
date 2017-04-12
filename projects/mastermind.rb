class Game
  def initialize
    self.code = Array.new(4) {Rand(1..6)}
    self.turns = 12
    self.guess = []
  end

  def play()
    until lost?|| won?

  end

  def won?
    self.turns.zero?
  end

  def display_feedback
    pegs = feedback
    blacks = ("black" * pegs[:black]).join(" ")
    whites = ("white" * pegs[:white]).join(" ")
    puts "#{blacks} #{whites}"
  end

  def feedback
    guess, code = self.guess, self.code
    pegs = {black: 0, white: 0}
    pegs[:black] = black_pegs

    code.reject!.with_index {|peg| peg == guess[index]}
    guess.reject!.with_index {|peg| peg == self.code[index]}

    pegs[:white] = white_pegs

    pegs
  end

  def black_pegs
    self.code.count.with_index { |peg, index| peg == guess[index] }
  end

  def white_pegs(code, reject)
    pegs = 0

    guess.each do |peg|
      if code.any? {|color| peg == color}
        pegs += 1
        code.slice!(code.index(peg))
      end
    end

    pegs
  end
end
