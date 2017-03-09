import cs50
import sys

if len(sys.argv) !+ 2:
    print("Takes one argument.")
    exit(1)
    
print("Hello, {}".format(sys.argv[1]))
exit(0)