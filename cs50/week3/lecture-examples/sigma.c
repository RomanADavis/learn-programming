#include <stdio.h>
#include <cs50.h>

int sigma(int m);
int iter_sigma(int m);
int smart_sigma(int m);

int main(void){
    int n;
    
    do{
        printf("Positive integer please: ");
        n = get_int(); 
    }while(n < 0);
    
    printf("Recursive:\t%d \nIterative:\t%d \nSmart:\t\t%d\n", sigma(n), iter_sigma(n), smart_sigma(n));
}

int sigma(int m){ // Recursive algo for triangle numbers
    if(m < 2){
        return m;
    }
    
    return m + sigma(m - 1);
}

int iter_sigma(int m){ // Iterative algo for triangle numbers
    int total = 0;
    
    for(int i = 0; i <= m; i++){
        total += i;
    }
    
    return total;
}

int smart_sigma(int m){ // Smart algo that solves in constant time!
    return m * (m + 1) / 2;
}