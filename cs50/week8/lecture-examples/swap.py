def swap(x, y):
    return y, x

x, y = 1, 2

print("x is {}".format(x))
print("y is {}".format(y))
print("swapping")
x, y = swap(x, y)
print("x is {}".format(x))
print("y is {}".format(y))