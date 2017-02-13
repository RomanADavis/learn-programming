#include <stdio.h>
#include <cs50.h>
#include <math.h>

// This code checks for valid and invalid Credit Card numbers. It was the most challenging C code 
// I've ever done and took me all day.

bool is_valid(long long);
int digit_count(long long);
int first_digit(long long);
int isolate_digit(long long, int);
void find_card(long long);

// Prompts the user for a credit card, checks for validity. If valid, it checks for the card's
// brand.
int main(void){
    printf("Number:");
    long long card_number = get_long_long();
    
    if(is_valid(card_number)){
        find_card(card_number);
    }else{
        printf("INVALID\n");
    }
}

// Checks if a card is valid.
bool is_valid(long long number){
    int digits, total = 0;
    
    for(int i = 1; i <= digit_count(number); i += 2){
        digits = isolate_digit(number, i) * 2;
       
        for(int j = 0;j <= digit_count(digits); j++){
            total += isolate_digit(digits, j);
        }
    }
    
    for(int i = 0; i <= digit_count(number); i += 2){
        total += isolate_digit(number, i);
    }
    
    return total % 10 == 0;
}

// Finds the length of an integer in decimal.
int digit_count(long long number){
    long long max = 1;
    int digits = 0;
    
    while(max <= number){
        digits++;
        max *= 10;
    }
    
    return digits;
}

// Returns a single digit of a decimal number.
// place is defined from right to left.
int isolate_digit(long long number, int place){
    long long top = 1;
    
    for(int i = 0; i < place; i++){
        top *= 10;
    }
    
    return number / top % 10;
}

// Returns the first digit.
int first_digit(long long number){
    return isolate_digit(number, digit_count(number) - 1);
}

// Prints out the card type.
void find_card(long long number){
    int first = first_digit(number);
    int length = digit_count(number);
    int second = isolate_digit(number, length - 2);
    
    if(length == 15){
        if(first == 3 && (second == 4 || second == 7)){
            printf("AMEX\n");
            return;
        }
    }else if(length == 16){
        if(first == 5 && second > 0 && second < 6){
            printf("MASTERCARD\n");
            return;
        }
        
        if(first == 4){
            printf("VISA\n");
            return;
        }
    }else if(length == 13){
        if(first == 4){
            printf("VISA\n");
            return;
        }
    }
    printf("valid\n");
}