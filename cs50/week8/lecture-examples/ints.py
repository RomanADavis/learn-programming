import cs50

print("x is ", end = "")
x = cs50.get_int()

print("y is ", end = "")
y = cs50.get_int()

print("{} + {} = {}".format(x, y, x + y))
print("{} - {} = {}".format(x, y, x - y))
print("{} * {} = {}".format(x, y, x * y))
print("{} / {} = {}".format(x, y, x / y))
print("{} // {} = {}".format(x, y, x // y))
print("{} % {} = {}".format(x, y, x % y))