#include <stdio.h>
#include <cs50.h>

int sigma(int m);

int main(void){
    int n;
    
    do{
        printf("Positive integer please: ");
        n = get_int(); 
    }while(n < 0);
    
    int answer = sigma(n);
    
    printf("%d\n", answer);
}

int sigma(int m){ // Recursive algo for triangle numbers
    if(m < 2){
        return m;
    }
    
    return m + sigma(m - 1);
}