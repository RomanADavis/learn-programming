#include <cs50.h>
#include <stdio.h>

void greet(string name);

int main(void){
    string name = get_string();
    greet(name);
}

void greet(string name){
    printf("Hello, %s.\n", name);
}
