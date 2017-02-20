#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>

// When s is being assigned to t, you aren't making a new string
// variable, but copying it's address. When you try to change
// the string from a copy of the same address, you are changing
// the old string.

int main(void){
    printf("s: ");
    string s = get_string();
    
    if(s == NULL){
        return 1;
    }
    
    string t = s;
    
    if(strlen(t) > 0){
        t[0] = toupper(t[0]);
    }
    
    printf("s: %s\n", s);
    printf("t: %s\n", t);
}