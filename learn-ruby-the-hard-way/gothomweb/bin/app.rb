require "sinatra"
require "./lib/gothonweb/map.rb"
set :port, 8080
set :static, true
set :public_folder, "static"
set :views, "view"

get "/" do
  return "Hello world."
end

get "/hello/" do
  erb :hello_form
end

post "/hello/" do
  greeting = params[:greeting] || "Hello there"
  name = params[:name] || "Nobody"

  erb :index, :locals => {"greeting" => greeting, "name" => name}
end
