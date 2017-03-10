import cs50

def main():
    print("Height: ", end = "")
    draw_pyramid(cs50.get_int())
    
def draw_pyramid(layers):
    for layer in range(layers):
        alignment = " " * (layers - layer - 1)
        left_pyramid = "#" * (layer + 1)
        right_pyramid = "#" * (layer + 1)
        print(alignment + left_pyramid + " " + right_pyramid)
        
if __name__ == "__main__":
    main()