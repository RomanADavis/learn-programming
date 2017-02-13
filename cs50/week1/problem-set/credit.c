#include <stdio.h>
#include <cs50.h>
#include <math.h>

// I haven't been able to confirm if this algo works. It won't 
bool is_valid(long long);
int digit_count(long long);
int first_digit(long long);
int isolate_digit(long long, int);
void find_card(long long);

int main(void){
    printf("Number:");
    long long card_number = get_long_long();
    
    if(is_valid(card_number)){
        find_card(card_number);
    }else{
        printf("INVALID\n");
    }
}

bool is_valid(long long number){
    int digits, total = 0;
    
    for(int i = 1; i <= digit_count(number); i += 2){
        digits = isolate_digit(number, i) * 2;
        //printf("%d\n", isolate_digit(number, i));
       
        for(int j = 0;j <= digit_count(digits); j++){
            total += isolate_digit(digits, j);
            //printf("%d\n", total);
        }
    }
    
    for(int i = 0; i <= digit_count(number); i += 2){
        total += isolate_digit(number, i);
    }
    //printf("%d\n", total);
    
    return total % 10 == 0;
}

int digit_count(long long number){
    long long max = 1;
    int digits = 0;
    
    while(max <= number){
        digits++;
        max *= 10;
    }
    
    return digits;
}

// place is defined from right to left.
int isolate_digit(long long number, int place){
    long long top = 1;
    
    for(int i = 0; i < place; i++){
        top *= 10;
    }
    
    return number / top % 10;
}

int first_digit(long long number){
    return isolate_digit(number, digit_count(number) - 1);
}

void find_card(long long number){
    int first = first_digit(number);
    int length = digit_count(number);
    int second = isolate_digit(number, length - 2);
    
    //printf("%d %d %d", first, second, length);
    
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