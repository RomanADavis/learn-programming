#include <stdio.h>
#include <cs50.h>

void swap(int*, int*);

int main(void){
    printf("x: ");
    int x = get_int();
    
    printf("y: ");
    int y = get_int();
    
    swap(&x, &y);
    
    printf("x: %d\n", x);
    printf("y: %d\n", y);
}

void swap(int *x, int *y){
    int temp = *x;
    *x = *y;
    *y = temp;
}