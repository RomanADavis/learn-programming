#include <stdio.h>
#include <stdlib.h>
#include <cs50.h>
#include <stdint.h>

typedef uint8_t BYTE;

bool is_jpg(BYTE*);

int main(int argc, char *argv[]){
    // Checks for argument
    if(argc != 2){
        fprintf(stderr, "Usage: ./recover raw.raw\n");
        return 1;
    }
    
    // Checks that file cah be opened
    FILE *raw = fopen(argv[1], "r");
    if(raw == NULL){
        fclose(raw);
        fprintf(stderr, "Could not open %s\n", argv[1]);
        return 2;
    }
    
    // Initialize variables
    FILE *jpg;
    BYTE block[512];
    char filename[8];
    int filecount = -1, block_size;
    
    do{ // Skips bytes until a jpeg is found
       block_size = fread(&block, 1, 512, raw);
    }while(!is_jpg(block));
    
    while(block_size == 512){ // Runs until the whole the whole raw is read
    
        // Sets up the file.
        filecount++; 
        sprintf(filename, "%03d.jpg", filecount);
        jpg = fopen(filename, "w");
        if(jpg == NULL){
            fprintf(stderr, "Could not create jpeg.\n");
        }
    
        // Reads the raw until it finds a new jpg.
        do{
            fwrite(block, 1, 512, jpg);
            block_size = fread(&block, 1, 512, raw);
        }while(!is_jpg(block) && block_size == 512);
    
        // Closes the file.
        fclose(jpg);
    }
    
    return 0;
}

bool is_jpg(BYTE *block){
    return block[0] == 0xff && block[1] == 0xd8 && block[2] == 0xff && (block[3] & 0xf0) == 0xe0;
}