#include <stdio.h>
#include <cs50.h>

int main(int argc, string argv[]){
    if(argc != 2){
        printf("Did not recieve argument.\n");
        return -1;
    }
    
    printf("Hello, %s!\n", argv[1]); // -1 == 255?
    return 0;
}