#include <stdio.h>
#include <cs50.h>

// Takes an amout of change and returns the lowest number of coins necessary in Americah currency.

int get_pennies(void);
int coins(int);

// Greets the user and prints the result.
int main(void){
    printf("O hai!");
    int amount = get_pennies();
    
    printf("%d\n", coins(amount));
}

// Gets the amount as a float from the user. Asks again if the answer isn't positive. Converts
// the float to an integer number of pennies.
int get_pennies(void){
    float change;
    
    do{
        printf("How much changed is owed?\n");
        change = get_float();
    }while(change < 0);
    
    return (int) ((change * 100) + 0.5); // Convert to pennies
}

// Calculates the number of coins.
int coins(int pennies){
    int change = 0;
    int coins[] = {25, 10, 5, 1};
    
    for(int i = 0; i < 4; i++){
        change += pennies / coins[i];
        //printf("%d, %d\n", pennies, change);
        pennies %= coins[i];
    }
    
    return change;
}