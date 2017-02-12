#include <stdio.h>
#include <cs50.h>

// Prints out double pyramid of specified height.
int get_height();
void draw_pyramid(int);
void draw_layer(int, int);

int main(void){
    int height = get_height();
    
    draw_pyramid(height);
}

int get_height(){
    int height;
    
    do{
        printf("Height: ");
        height = get_int();
    }while(height < 0 || height > 23);
    
    return height;
}

void draw_pyramid(int height){
    for(int layer = 0; layer < height; layer++){
        draw_layer(layer, height);
    }
}

void draw_layer(int layer, int height){
    for(int i = 0; i < height - layer - 1; i++){
        printf(" ");
    }
    
    for(int i = 0; i <= layer; i++){
        printf("#");
    }
    
    printf("#\n");
}