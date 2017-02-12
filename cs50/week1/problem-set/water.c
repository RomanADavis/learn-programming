#include <cs50.h>
#include <stdio.h>
// Calculates the equivalent number in bottles of water from minutes in the shower.

long bottles(long);
long double_to_long(double);

// Takes in input and displays result.
int main(void){
    printf("Minutes: ");
    int minutes = get_int();
    
    printf("Bottles: %ld\n", bottles(minutes));
}

// Calculates the number of gallons per minute.
long bottles(long minutes){
    int ounces_in_a_gallon = 128, ounces_in_a_bottle = 16;
    float gallons_per_minute = 1.5;
    
    float gallons = minutes * gallons_per_minute;
    
    return double_to_long(gallons * ounces_in_a_gallon / ounces_in_a_bottle);
}

// Converts doubles (decimal numbers) to longs (integes)
long double_to_long(double f){
    return f >= 0 ? (long) (f + 0.5) : (long) (f - 0.5);
}