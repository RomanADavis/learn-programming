function phonePurchase() {
    function bankInit(){
        
        return Number(prompt( "How much money is in your bank account?" ));
    }
    
    function purchaseLoop(account) {
        var account = bankInit();
        const PHONE_PRICE = 90;
        const ACCESSORY_PRICE = 10;
        const TAX_RATE = 0.07; 
        var threshold = mentalThreshold();
        var total;
        var phones = 0;
        
        function calculateTotal() {
            var price = PHONE_PRICE;
            console.log( "A phone will be $" + price + "." );
            if(ACCESSORY_PRICE < threshold){
                price += ACCESSORY_PRICE;
                console.log( "With an accessory, that will be $" + price + "." );
            }
            
            return price *= 1 + TAX_RATE;
        }
        
        function buyPhone(total){
            console.log("The total, after taxes, is " + total + ".");
            console.log("You have $" + account  + " left.");
            
            if(total < account) {
                account -= total;
                console.log( "You purchase the phone." );
                return true;
            }else {
                console.log( "You can't afford this." );
                return false;
            }
        }
        
        function mentalThreshold() {
            return Number(prompt( "How much are you willing to spend on accessories?" ));
        }
        
        while(true){
            total = calculateTotal();
            phones++;
            if(!buyPhone(total)){
                break;
            }
        }
        console.log( "You have " + phones + " phones.");
    }
    purchaseLoop();
}

phonePurchase();