import cs50
import sys

def main():
    if len(sys.argv) != 2:
        print("Must have one argument.")
        exit(1)
        
    print("plaintext: ", end = "")
    plaintext = cs50.get_string()
    
    if plaintext == None:
        print("get_string() failed.")
        exit(2)
        
    print("cyphertext: ", end = "")
    print(cypher(plaintext, sys.argv[1]))
    
def cypher(text, key):
    cypher = ""
    key_index = 0
    for char in text:
        cypher += rotate(char, key[key_index])
        key_index = (key_index + 1) % len(key)
        
    return cypher
    
def rotate(char, keypiece):
    result = char
    n = ord(keypiece.upper()) - ord('A')
    for i in range(n):
        result = increment(result)
    
    return result
        
def increment(char):
    if ord(char) >= ord("A") and ord(char) <= ord("Z"):
        return increment_upper(char)
    elif ord(char) >= ord("a") and ord(char) <= ord("z"):
         return increment_lower(char)
    else:
        return char
        
def increment_upper(char):
    if char == "Z":
        return "A"
    return chr(ord(char) + 1)
    
def increment_lower(char):
    if char == "z":
        return "a"
    return chr(ord(char) + 1)
    
if __name__ == "__main__":
    main()