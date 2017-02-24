typedef struct{
    int value;
    struct node *left;
    struct node *right;
}node;

void balance(node *tree){
    
}

bool search(node *tree, int value){
    if(tree == NULL){
        return false;
    }else if(tree -> value > n){
        return search(tree -> left, n);
    }else if(tree -> value < n){
        return search(tree -> right, n);
    }else{
        return true;
    }
}