from http.server import BaseHTTPRequestHandler, HTTPServer

# HTTPRequestHandler class
class HTTPServer_RequestHandler(BaseHTTPRequestHandler):
    # GET
    def do_GET(self):
        self.send_response(200) # Send statuse code
        
        # send headers
        self.send_headers("Content-type", "html/css")
        self.end_headers()
        
        # write message
        self.wfile.write(bytes("Hello, world.", "utf6"))
        return
    
# configure server
port = 8080
server_address = ("0.0.0.0", port)
httpd = HTTPServer(server_address, HTTPServer_RequestHandler)

# run server
httpd.serve_forever()