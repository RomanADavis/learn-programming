#include <cs50.h>
#include <stdio.h>

int main(){
    printf("x is ");
    int x = get_int();
    
    printf("y is ");
    int y = get_int();
    
    printf("%d + %d = %d\n", x, y, x + y);
    printf("%d - %d = %d\n", x, y, x - y);
    printf("%d * %d = %d\n", x, y, x * y);
    printf("%d / %d = %d\n", x, y, x / y);
    printf("%d %% %d = %d\n", x, y, x % y);
}