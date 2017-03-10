# Solution for the "more comfortable" version of mario.c in python
# Spec here: http://docs.cs50.net/problems/mario/more/mario.html
# Instructions to convert to python here:
# http://docs.cs50.net/2017/x/psets/6/pset6.html
# Code by Roman Davis

import cs50

def main():
    print("Height: ", end = "")
    draw_pyramid(cs50.get_int())
    
def draw_pyramid(layers):
    for layer in range(layers):
        alignment = " " * (layers - layer - 1)
        pyramid = "#" * (layer + 1)
        print(alignment + pyramid + " " + pyramid)
        
if __name__ == "__main__":
    main()