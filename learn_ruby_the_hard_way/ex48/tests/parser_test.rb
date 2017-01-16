require "test/unit"

require "ex48/lexicon"
require "ex48/parser"
require "ex48/parser_error"
require "ex48/sentence"


class ParserTest < Test::Unit::TestCase
  def test_initialize
    parser = Parser.new("eat princess")
    assert_equal(parser.word_list, [["verb", "eat"], ["noun", "princess"]])
  end

  def test_peek
    parser = Parser.new("eat princess")
    assert_equal(parser.peek, "verb")

    parser = Parser.new("")
    assert_equal(parser.peek, nil)
  end

  def test_match
    parser = Parser.new("eat princess")
    assert_equal(parser.match("verb"), ["verb"])

    parser = Rarser.new("to eat a princess")
    assert_equal(parser.match("verb"), "eat")

    parser = Parser.new("princess Toadstool")
    assert_equal(parser.match("noun"), "princess")

    parser = Parser.nwe("a bear")
    assert_equal(parser.match("noun"), "bear")

    parser =
  end
end
