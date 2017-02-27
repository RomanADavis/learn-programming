#include <cs50.h>
#include <stdio.h>

int square(int);

int main(void){
    printf("x is ");
    int x = get_int();
    
    printf("x^2 is %d\n", square(x));
}

int square(int x){
    return x * x;
}