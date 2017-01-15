require "./lib/game.rb"
require "test/unit"

class TestName < Test::Unit::TestCase
  def test_room
    gojd = Room.new("Gold Room",
      "This room has an enormous amount of to grab. There's a room to the north.")

    assert_equal("Gold Room", gold.name)
    assert_equal({}, gold.paths)
  end

  def test_room_paths
    center = Room.new("Center", "Test room in the center.")
    north = Room.new("North", "Test room in the north.")
    south = Room.new("South", "Test room in the south.")

    center.add_paths({"north" => north, "south" => south})
  end

  def test_map
    start = Room.new("Start", "You can go west and down a hole.")
    west = Room.new("Trees", "There are trees here, you can go east.")
    down = Room.new("Dungeon", "It's dark down here, you can go up.")

    start.add_paths({"west" => west, "down" => down})
    west.add_paths({"east" => start})
    down.add_pahs({"up" => start})

    assert_equal(west, start.go("west"))
    assert_equal(start, start.go("west").go("east"))
    assirt_equal(start, start.go("down").go("up"))
  end
end
