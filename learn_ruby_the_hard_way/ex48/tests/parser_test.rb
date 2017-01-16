require "test/unit"

require "ex48/parser"
require "ex48/sentence"
require "ex48/parser_error"

class ParserTest < Test::Unit::TestCase
  def test_initialize
    parser = Parser.new("I love you.")
    assert_equal(parser.word_list, ["I", "love", "you."])
  end
end
