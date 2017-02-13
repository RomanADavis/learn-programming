#include <stdio.h>

int main(void){
    for(char letter = 'A'; letter <= 'Z'; letter++){
        printf("%c is %i\n", letter, letter); // will work without explicit cast
    }
}