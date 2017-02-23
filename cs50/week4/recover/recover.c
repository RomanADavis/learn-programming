#include <stdio.h>

int main(int argc, char *argv[]){
    if(argc != 2){
        fprintf(stderr, "Usage: ./recover raw.raw\n");
        return 1;
    }
    
    FILE *raw = fopen(argv[1], "r");
    
    if(raw == NULL){
        fprintf(stderr, "Could not open %s\n", argv[1]);
        return 2;
    }
    
    return 0;
}