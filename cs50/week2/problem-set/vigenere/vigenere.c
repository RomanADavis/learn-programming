#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>

bool is_alpha(string);
char increment(char);
void encrypt(string, string);

int main(int argc, string argv[]){
    // Shuts down the program without a valid key.
    if(argc != 2 || !is_alpha(argv[1])){
        printf("No key given or invalid.\n");
        return 1;
    }
    
    string key = argv[1];
    string secret = get_string();
    
    encrypt(secret, key);
}

void encrypt(string secret, string key){
    int place = 0, key_length = strlen(key);
    char letter;
    
    for(int i = 0, length = strlen(secret); i < length; i++){
        letter = toupper(key[place]);
        
        if(('A' <= secret[i] && 'Z' >= secret[i]) || ('a' <= secret[i] && 'z' >= secret[i])){
            for(char j = letter; 'A' < j; j--){
                secret[i] = increment(secret[i]);
            }
            place = place < key_length - 1? place + 1 : 0;
        }
        
        printf("%c", secret[i]);
    }
    printf("\n");
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

// Increments a letter, perserves case and non letter characters.
char increment(char letter){
    if(letter >= 'a' && letter <= 'z'){
        return letter == 'z' ? 'a' : letter + 1;
    }
    
    if(letter >= 'A' && letter <= 'Z'){
        return letter == 'Z' ? 'A' : letter + 1;
    }
        
    return letter;
}