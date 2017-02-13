#include <stdio.h>
#include <cs50.h>
#include <string.h>

bool is_alpha(string);

int main(int argc, string argv[]){
    // Shuts down the program without a valid key.
    if(argc != 2 || !is_alpha(argv[1])){
        printf("No key given or invalid.\n");
        return 1;
    }
    
    printf("Success.\n");
}

// Checks for key made of alphabetical characters
bool is_alpha(string key){
    for(int i = 0, length = strlen(key); i < length; i++){
        if(!(('A' <= key[i] && 'Z' >= key[i]) || ('a' <= key[i] && 'z' >= key[i]))){
            return false;
        }
    }
    
    return true;
}