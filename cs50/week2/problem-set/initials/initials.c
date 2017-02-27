#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>

int main(void){
    string full_name = get_string();
    
    if(full_name != NULL){

        if(full_name[0] != ' '){
            printf("%c", toupper(full_name[0]));  
        }
        
        for(int i = 1 /* skips first letter */, length = strlen(full_name); i < length; i++){
            
            if(full_name[i - 1] == ' ' && full_name[i] != ' '){
                printf("%c", toupper(full_name[i]));
            }
        }
        
        printf("\n");
    }
}