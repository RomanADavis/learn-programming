/**
 * helpers.c
 *
 * Helper functions for Problem Set 3.
 */
 
#include <cs50.h>

#include "helpers.h"

/**
 * Returns true if value is in array of n values, else false.
 */
bool search(int value, int values[], int n)
{
    if(value < 0){ // Return false if nonpositive
        return false;
    }
    
    for(int i = 0; i < n; i++){ // Linear search
        if(values[i] == value){
            return true;
        }
    }
    
    return false;
}

/**
 * Sorts array of n values.
 */
void sort(int values[], int n)
{
    bool unsorted;
    int holder;
    
    // Bubblesort
    do {
        unsorted = false;
        for(int i = 0; i < n - 1; i ++){
            if(values[i] > values[i + 1]){ 
                unsorted = true; // Start the loop over.
                holder = values[i]; // Switches places
                values[i] = values[i + 1];
                values[i + 1] = holder;
            }
        }
    }while(unsorted);
    return;
}
