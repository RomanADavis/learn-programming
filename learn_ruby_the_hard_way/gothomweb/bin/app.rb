require "sinatra"

set :port, 8080
set :static, true
set :public_folder, "static"
set :views, "view"

get "/" do
  return "Hello world."
end

get "/hello/" do
  greeting = params[:greeting] || "Hi there."
  erb :index, :locals => {"greeting" => greeting}
end
