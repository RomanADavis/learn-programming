#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void){
    
    string s = get_string(); // ask user for input
    
    // make sure a string is returned
    if(s != NULL){ // Necessary to avoid weird C errors.
    
        for(int i = 0, length = strlen(s); i < length; i++){// iterate over the string one character at a time.
            printf("%c\n", s[i]); // print i'th character
        }
    }
}