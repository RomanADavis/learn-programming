#include <stdio.h>
#include <cs50.h>
#include <string.h>

bool is_alpha(string);
char increment(char);

int main(int argc, string argv[]){
    // Shuts down the program without a valid key.
    if(argc != 2 || !is_alpha(argv[1])){
        printf("No key given or invalid.\n");
        return 1;
    }
    
    //string key = argv[1];
    
    string secret = get_string();
    
    printf("%c\n", increment(secret[0]));
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

char increment(char letter){
    if(letter >= 'a' && letter <= 'z'){
        return letter == 'z' ? 'a' : letter + 1;
    }
    
    if(letter >= 'A' && letter <= 'Z'){
        return letter == 'Z' ? 'A' : letter + 1;
    }
        
    return letter;
}