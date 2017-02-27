#include <stdio.h>
#include <string.h>
#include <cs50.h>
#include <ctype.h>

int main(void){
    printf("s: ");
    string s = get_string();
    
    if(s == NULL){
        return 1;
    }
    
    // Allocates a piece of memory big enough to store s and points
    // t at it.
    char *t = malloc((strlen(s) + 1) * sizeof(char));
    if(t == NULL){
        return 1;
    }
    
    // Copies s into t
    for(int i = 0, length = strlen(s); i <= length; i++){
        t[i] = s[i];
    }
    
    if(strlen(t) > 0){
        t[0] = toupper(t[0]);
    }
    
    printf("s: %s\n", s);
    printf("t: %s\n", t);
}