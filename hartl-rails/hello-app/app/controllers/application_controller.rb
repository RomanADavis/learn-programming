class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  def hello
    render html:"Hello world."
  end
  
  def goodbye
    render html: "Goodbye cruel world, with such people in it."
  end
end
