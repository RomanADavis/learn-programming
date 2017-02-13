#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void){
    string s = get_string();
    
    if(s != NULL){
        for(int i = 0, n = strlen(s); i < n; i++){
            if(s[i] >= 'a' && s[i] <= 'z'){ // if it's a lowercase letter
                printf("%c", s[i] - 32); // print the capitalized the letter
            }else{
                printf("%c", s[i]); // otherwise, just print the letter.
            }
        }
    }
    printf("\n");
}