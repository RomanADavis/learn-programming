#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void){
    // First part of the problem.
    float price;
    char *code;
    
    printf("X C O M P U T E R S\n");
    printf("0 1 2 3 4 5 6 7 8 9\n");
    
    printf("Enter price: ");
    scanf("%f", &price);
    
    printf("%.2f\n", price);
    
    // Convert to string
    sprintf(code, "%.2f", price);
    
    printf("%s\n", code);
    
    //Iterate over the string
    char key[] = "XCOMPUTERS";
    char digit = 0;
    
    for(int i = 0, length = strlen(code); i < length; i++){
        if(isdigit(code[i])){
            digit = code[i] - '0'; //Convert char to integer
            code[i] = key[digit]; //Get the index of the key and put it in code
        } 
    }
    
    printf("%s\n", code);
}