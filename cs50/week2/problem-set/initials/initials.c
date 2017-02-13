#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>

int main(void){
    string full_name = get_string();
    
    if(full_name != NULL){
        printf("%c", toupper(full_name[0]));
        
        for(int i = 0, length = strlen(full_name); i < length; i++){
            if(full_name[i] == ' '){
                printf("%c", toupper(full_name[i + 1]));
            }
        }
        
        printf("\n");
    }
}