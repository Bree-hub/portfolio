# Import necessary modules
import http.server
import socketserver

# Define the request handler class
class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Content-type', 'text/css')
        http.server.SimpleHTTPRequestHandler.end_headers(self)

# Specify the port number
PORT = 8000

# Create an instance of the server
Handler = MyHttpRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)

# Start the server
print("Server started at localhost:" + str(PORT))
httpd.serve_forever()
