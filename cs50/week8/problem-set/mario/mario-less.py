import cs50

def main():
    print("Height: ", end = "")
    draw_pyramid(cs50.get_int())

def draw_pyramid(n):
    for layer in range(n):
        print(" " * (n - layer - 1)  + (layer + 2) * "#") # Cheating?
        
if __name__ == "__main__":
    main()