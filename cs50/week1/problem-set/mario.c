#include <stdio.h>
#include <cs50.h>

// Prints out double pyramid of specified height.
int get_height();
void draw_pyramid(int);
void draw_layer(int, int);
void draw_stack(int);
void alignment(int, int);

// Takes in a height and prints out a double pyramid
int main(void){
    int height = get_height();
    
    draw_pyramid(height);
}

// Gets the height from the user, reject negative numbers and numbers over 23.
int get_height(){
    int height;
    
    do{
        printf("Height: ");
        height = get_int();
    }while(height < 0 || height > 23);
    
    return height;
}

// Draws the double pyramid in a loop.
void draw_pyramid(int height){
    for(int layer = 0; layer < height; layer++){
        draw_layer(layer, height);
    }
}

// Draws the layers by calling alignment() and draw_stack()
void draw_layer(int layer, int height){
    alignment(layer, height);
    draw_stack(layer);
    printf("  ");
    draw_stack(layer);
    printf("\n");
}


// Aligns the pyramid by drawing spaces one character at a time for that layer.
void alignment(int layer, int height){
    for(int i = 0; i < height - layer - 1; i++){
        printf(" ");
    }
}

// Draws the stack by printing "#" over and over for that layer.
void draw_stack(int layer){
    for(int i = 0; i <= layer; i++){
        printf("#");
    }    
}