class Player
  attr_accessor :name, :inventory
  def initaialize(name = "", location)
    @inventory = Inventory.new
    @location = location
    @name = name

  end

# How do I check for an item in an array with a certain name?
  def examine(item)
    
  end

  def take(item)
    @inventory.get(item)
  end

  def get(item)
    @inventory.add(item)
  end

  def drop(item)
    @inventory.lose(item) if @inventory[item]
  end

  def move(room)
    @location = @location.exits[room] if @location.exits[room]
  end
end
