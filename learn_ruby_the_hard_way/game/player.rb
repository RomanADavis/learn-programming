class Player
  attr_accessor :name, :inventory
  def initaialize(name = "", location)
    @inventory = Inventory.new
    @location =
    @name = name
  end

  def take(item)
    item.nailed_down? ? puts "You can't take that." : get(item)
  end

  def get(item)
    @inventory.add(item)
  end

  def drop(item)
    @inventory.lose(item)
  end

  def move(room)
    @location = @location.exits[room]
  end
end
