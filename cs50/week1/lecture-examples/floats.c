#include <cs50.h>
#include <stdio.h>

int main(void){
    printf("x is ");
    float x = get_float();
    
    printf("y is ");
    float y = get_float();
    
    printf("%f + %f = %f\n", x, y, x + y);
    printf("%f - %f = %f\n", x, y, x - y);
    printf("%f * %f = %f\n", x, y, x * y);
    printf("%f / %f = %f\n", x, y, x / y);
    // I don't think modulo would work.
}