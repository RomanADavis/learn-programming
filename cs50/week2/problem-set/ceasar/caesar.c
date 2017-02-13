#include <stdio.h>
#include <cs50.h>
#include <string.h>

void encrypt(string, int);
char increment(char);
char increment_lower(char);
char increment_upper(char);
bool is_number(string);

int main(int argc, string argv[]){
    if(argc != 2 || !is_number(argv[1])){
        printf("No key given or invalid.\n");
        return 1;
    }
    
    int k = atoi(argv[1]); // takes an integer from command line
    
    printf("plaintext: ");
    string secret = get_string();
    
    printf("ciphertext: ");
    encrypt(secret, k);;
}

void encrypt(string secret, int k){
    char letter = '\0';
    
    for(int i = 0, length = strlen(secret); i < length; i++){
        
        letter = secret[i];
        
        for(int j = 0; j < k; j++){
            letter = increment(letter);
        }
        
        printf("%c", letter);
    }
    
    printf("\n");
}

char increment(char letter){
    if(letter >= 'a' && letter <= 'z'){
        return increment_lower(letter);
    }
    
    if(letter >= 'A' && letter <= 'Z'){
        return increment_upper(letter);
    }
        
    return letter;
}

char increment_lower(char letter){
    if(letter == 'z'){
        return 'a';
    }
    
    return letter + 1; 
}

char increment_upper(char letter){
    if(letter == 'Z'){
        return 'A';
    }
    
    return letter + 1;
}

bool is_number(string number){
    for(int i = 0, length = strlen(number); i < length; i++){
        if(!('0' <= number[i] && '9' >= number[i])){
            return false;
        }
    }
    
    return true;
}