# Implements a greedy alorithm that takes in an amount of change
# as a float and returns the least number of coins necessary. 
#
# Spec here: http://docs.cs50.net/problems/greedy/greedy.html
#
# Instructions to convert to python here:
# http://docs.cs50.net/2017/x/psets/6/pset6.html
#
# Code by Roman Davis

import cs50

def main():
    change = -1
    
    while change < 0:
        print("Change: ", end = "")
        change = cs50.get_float()
    
    print(coins(change))
    
def coins(change):
    denominations = [100, 25, 10, 5, 1]
    pennies = int(change * 100)
    total = 0
    denomination = 0
    while pennies > 0:
        while pennies >= denominations[denomination]:
            pennies -= denominations[denomination]
            total += 1
        denomination += 1
    return total
    
if __name__ == "__main__":
    main()