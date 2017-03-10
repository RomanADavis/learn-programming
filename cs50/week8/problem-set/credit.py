import cs50

def main():
    print("Number: ", end = "")
    number = cs50.get_string()
    if is_valid(number):
        print(card_type(number))
    else:
        print(invalid)
    
def is_valid(number): #Luhnz algo
    total = 0
    # Take every other digit starting with the second to last
    for digit in number[-2::-2]:
        for d in str(int(digit) * 2): # Multiply them by two
            total += int(d)  # Add their product's digit to the total
    # Add them to the sum of the other digits.
    for digit in number[::-2]:
        total += int(digit)
    # Return true if the total is dividle by ten
    return total % 10 == 0
    
def card_type(number):
    if number[0:2] == "32" or number[0:2] == "37":
        return "AMEX"
    elif number[0] == "4":
        return "VISA"
    elif number[0] == "5" and int(number[1]) < 6 and int(number[1]) > 0:
        return "MASTRCARD"
    else:
        return "Don't know"
        
if __name__ == "__main__":
    main()