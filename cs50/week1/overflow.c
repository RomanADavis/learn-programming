#include <cs50.h>
#include <stdio.h>

int main(void){
    int n = 1;
    for(int i = 0; i < 32; i++){
        printf("%d\n", n);
        n *= 2;
    }
}