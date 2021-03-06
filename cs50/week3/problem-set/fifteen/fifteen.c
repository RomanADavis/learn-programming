/**
 * fifteen.c
 *
 * Implements Game of Fifteen (generalized to d x d).
 *
 * Usage: fifteen d
 *
 * whereby the board's dimensions are to be d x d,
 * where d must be in [DIM_MIN,DIM_MAX]
 *
 * Note that usleep is obsolete, but it offers more granularity than
 * sleep and is simpler to use than nanosleep; `man usleep` for more.
 */
 
#define _XOPEN_SOURCE 500

#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

// constants
#define DIM_MIN 3
#define DIM_MAX 10

// board
int board[DIM_MAX][DIM_MAX];

// dimensions
int d;

// prototypes
void clear(void);
void greet(void);
void init(void);
void draw(void);
bool move(int tile);
bool won(void);
bool juggle(int, int, int, int);

int main(int argc, string argv[])
{
    // ensure proper usage
    if (argc != 2)
    {
        printf("Usage: fifteen d\n");
        return 1;
    }

    // ensure valid dimensions
    d = atoi(argv[1]);
    if (d < DIM_MIN || d > DIM_MAX - 1)
    {
        printf("Board must be between %i x %i and %i x %i, inclusive.\n",
            DIM_MIN, DIM_MIN, DIM_MAX - 1, DIM_MAX - 1);
        return 2;
    }

    // open log
    FILE *file = fopen("log.txt", "w");
    if (file == NULL)
    {
        return 3;
    }

    // greet user with instructions
    greet();

    // initialize the board
    init();

    // accept moves until game is won
    while (true)
    {
        // clear the screen
        clear();

        // draw the current state of the board
        draw();

        // log the current state of the board (for testing)
        for (int i = 0; i < d; i++)
        {
            for (int j = 0; j < d; j++)
            {
                fprintf(file, "%i", board[i][j]);
                if (j < d - 1)
                {
                    fprintf(file, "|");
                }
            }
            fprintf(file, "\n");
        }
        fflush(file);

        // check for win
        if (won())
        {
            printf("ftw!\n");
            break;
        }

        // prompt for move
        printf("Tile to move: ");
        int tile = get_int();
        
        // quit if user inputs 0 (for testing)
        if (tile == 0)
        {
            break;
        }

        // log move (for testing)
        fprintf(file, "%i\n", tile);
        fflush(file);

        // move if possible, else report illegality
        if (!move(tile))
        {
            printf("\nIllegal move.\n");
            usleep(500000);
        }

        // sleep thread for animation's sake
        usleep(500000);
    }
    
    // close log
    fclose(file);


    // success
    return 0;
}

/**
 * Clears screen using ANSI escape sequences.
 */
void clear(void)
{
    printf("\033[2J");
    printf("\033[%d;%dH", 0, 0);
}

/**
 * Greets player.
 */
void greet(void)
{
    clear();
    printf("WELCOME TO GAME OF FIFTEEN\n");
    usleep(200000);
}

/**
 * Initializes the game's board with tiles numbered 1 through d*d - 1
 * (i.e., fills 2D array with values but does not actually print them).  
 */
void init()
{
    int x, y, tile;
    // Initialize tiles with -1 for the "edges" of the board.
    for(y = 0; y < DIM_MAX; y++){
        for(x = 0; x < DIM_MAX; x++){
            board[y][x] = -1;
        }
    }
    
    // Write each tile in backwards on the "working board," size
    // determined by the user.
    tile = 0;
    for(y = d - 1; y >= 0; y--){
        for(x = d - 1; x >= 0; x--){
            board[y][x] = tile;
            tile++;
        }
    }
    
    // Switch places of 1 and 2 if there are and odd number of tiles.
    if(d % 2 == 0){ 
        board[d - 1][d - 2] = 2;
        board[d - 1][d - 3] = 1;
    }
}

/**
 * Prints the board in its current state.
 */
void draw(void)
{
    printf("\n");
    for(int y = 0; y < d; y++){
        for(int x = 0; x < d; x++){
            if(x == 0){
                board[y][x] == 0? printf("_ ") : printf("%2d ", board[y][x]);
            }else{
                board[y][x] == 0? printf(" _ ") : printf("%2d ",board[y][x]);
            }
        }
        printf("\n%s", y == d ? "" : "\n");
    }
}

/**
 * If tile borders empty space, moves tile and returns true, else
 * returns false. 
 */
bool move(int tile)
{
    bool found;
    int x, y;
    // Find position.
    for(y = 0; y < d; y++){
        for(x = 0; x < d; x++){
            if(board[y][x] == tile){
                found = true;
                break;
            }
        }
        if(found){
            break;
        }
    }
    //printf("%d, %d", x, y);
    
    // Check for blanks
    if(y && !board[y - 1][x]){
        return juggle(x, y, x, y - 1);
    }
    
    if(y != d && !board[y + 1][x]){
        return juggle(x, y, x, y + 1);
    }
    
    if(x && !board[y][x - 1]){
        return juggle(x, y, x - 1, y);
    }
    
    if(x != d && !board[y][x + 1]){
        return juggle(x, y, x + 1, y);
    }
    
    return false;
}

bool juggle(int nx, int ny, int bx, int by){
    board[by][bx] = board[ny][nx];
    board[ny][nx] = 0;
    return true;
}
/**
 * Returns true if game is won (i.e., board is in winning configuration), 
 * else false.
 */
bool won(void)
{
    // TODO
    int tile = 1;
    for(int y = 0; y < d; y++){
        for(int x = 0; x < d; x++){
            if(x == (d - 1) && y == (d - 1)){
                return board[y][x] == 0;
            }else if(board[y][x] != tile){
                return false;
            }
            tile++;
        }
    }
    
    return false;
}
