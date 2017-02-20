#include <cs50.h>
#include <stdio.h>

// This doesn't work because you are comparin two different
// "pointers" - addresses in memory space. Since they are
// distinct variables, they occupy distinct locations.

int main(void){
    printf("s: ");
    string s = get_string();
    
    printf("t: ");
    string t = get_string();
    
    if(s == t){
        printf("same\n");
    }else{
        printf("different\n");
    }
}