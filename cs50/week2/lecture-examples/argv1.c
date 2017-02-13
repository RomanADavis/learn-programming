#include <stdio.h>
#include <cs50.h>

// Prints each argument given to the programmer on a different line.
int main(int argc, string argv[]){
    
    for(int i = 0; i < argc; i++){
        printf("%s\n", argv[i]);
    }
}