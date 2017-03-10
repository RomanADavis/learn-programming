# Implements the "less comfortable" version of mario in python.
# Spec is here: http://docs.cs50.net/problems/mario/less/mario.html
# Request to implement in python here:
# http://docs.cs50.net/2017/x/psets/6/pset6.html
# Code by Roman Davis

import cs50

def main():
    print("Height: ", end = "")
    draw_pyramid(cs50.get_int())

def draw_pyramid(n):
    for layer in range(n):
        alignment = " " * (n - layer - 1)
        pyramid = "#" * (layer + 2)
        print(alignment + pyramid) # Cheating?
        
if __name__ == "__main__":
    main()