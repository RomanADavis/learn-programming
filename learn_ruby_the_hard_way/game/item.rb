class Item
  def initialize(name, description = "", takeable = false)
    @name = name
    @description = descripiton
  end

  def nailed_down?
    !@takeable
  end
end
