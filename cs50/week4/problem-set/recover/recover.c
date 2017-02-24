#include <stdio.h>
#include <stdlib.h>
#include <cs50.h>
#include <stdint.h>

typedef uint8_t BYTE;

bool is_jpeg(BYTE*);

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
    
    FILE *jpeg;
    BYTE block[512];
    char filename[7];
    int filecount = -1, block_size;
    
    do{
       block_size = fread(&block, 1, 512, raw);
        //printf("%x %x %x %x\n", block[0], block[1], block[3], block[4]);
        //getch();
    }while(!is_jpeg(block));
    
    while(block_size == 512){
        filecount += 1;
        sprintf(filename, "%03d.jpg", filecount);
        jpeg = fopen(filename, "w");
        do{
            fwrite(block, 1, 512, jpeg);
            block_size = fread(&block, 1, 512, raw);
        }while(!is_jpeg(block) && block_size == 512);
        fclose(jpeg);
    }
    
    return 0;
}

bool is_jpeg(BYTE *block){
    return block[0] == 0xff && block[1] == 0xd8 && block[2] == 0xff && (block[3] & 0xf0) == 0xe0;
}