#include <cs50.h>
#include <stdio.h>

void say(string, int);
void cough(int);
void sneeze(int);

int main(void){
    cough(3);
    sneeze(3);
}

void say(string word, int times){
    for(int i = 0; i < times; i++){
        printf("%s\n", word);
    }
}

void cough(int times){
    say("cough", times);
}

void sneeze(int times){
    say("sneeze", times);
}