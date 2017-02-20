#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void){
    char *s = get_string();
    if(s == NULL){
        return 1;
    }
    
    // Uses pointer math to access elements of arrays.
    for(int i = 0, length = strlen(s); i < length; i++){
        printf("%c\n", *(s + i));
    }
}