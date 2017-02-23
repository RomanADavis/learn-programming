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
    
    bool ended = false
    char block[512], filename[7];
    
    while(!ended){
        fread(&block, 1, 512, raw)
        if(is_jpeg(block)){
            continue;
        }
        //start reading into new jpeg
        
        char current_byte
        do{
            
        }while();
    }
    printf("%lu\n", sizeof(*raw));
    return 0;
}

bool is_jpeg(char *block){
    block[0] == 0xff && block[1] == 0xd8 && block[2] == 0xff && (block[4] & Oxf0) == 0xe0
}