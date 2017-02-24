#include <cs50.h>

typedef struct node{
    int value;
    struct node *next;
}
node;

// both delete and remove and remove are highlighted (reserved?) words.
void pop(node *list, int value){
    
}

void insert(node *list, int value){
    
}

bool search(node *list, int value){
    node *pointer = list;
    while(pointer != NULL){
        if(pointer -> value == value){
            return true;
        }
        pointer = pointer -> next;
    }
    return false
}