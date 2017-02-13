#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(int argc, string argv[]){
    // ITerate over each argument/ word/ string in argv
    for(int i = 0; i < argc; i++){
        // Iterate over every character in the string/ argument
        for(int j = 0, length = strlen(argv[i]); j < length; j++){
            // Print every character on a new line.
            printf("%c\n", argv[i][j]);
        }
    }
}