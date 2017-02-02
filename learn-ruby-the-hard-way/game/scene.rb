class Room
  def initialize(name)
    @name = name
    @visible = [] #list of interactables in the romm
    @hidden = [] #hidden items
  end

  def reveal(item)
    if @hidden.include? item
      puts "#{item} revealed!"
      @visible << @hidden.delete(item)
    else
      puts "#{item} isn't here."
    end
  end
end
