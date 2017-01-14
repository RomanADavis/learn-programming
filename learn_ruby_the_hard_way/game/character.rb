class character
  attr_accessor :name, :inventory
  def initaialize
    @inventory = Inventory.new
  end
end
