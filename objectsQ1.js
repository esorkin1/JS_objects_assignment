// 1. We have an object of customers for our food delivery app with the information about their past orders with order values.
//Write a JavaScript program to give a "Premium Membership" to the customer if the customer has made at least 5 orders of the 
//minimum value of 20. The customers and their past order history is given below:

customers_data = {
    'Ben10': [22, 30, 11, 17, 15, 52, 27, 12], 'Sameer': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45], 'Zeeshan': [22, 30, 11, 5, 17, 30, 6, 57]
    }
Ben10 = {
    name: "Ben",
    age: "10",
    premiumCheck: function() {

        var premiumOrders = 0;
 
        if (customers_data.Ben10[0] >= 20) {
            ++premiumOrders;
            //console.log(premiumOrders);
        } else {}
        
        if (customers_data.Ben10[1] >= 20) {
            ++premiumOrders;
            //console.log(premiumOrders);
        } else {}
       
        if (customers_data.Ben10[2] >= 20) {
            ++premiumOrders;
            //console.log(premiumOrders);
        } else {}
        
        if (customers_data.Ben10[3] >= 20) {
            ++premiumOrders;
            //console.log(premiumOrders);
        } else {}
        
        if (customers_data.Ben10[4] >= 20) {
            ++premiumOrders;
            //console.log(premiumOrders);
        } else {}
        
        if (customers_data.Ben10[5] >= 20) {
            ++premiumOrders;
            //console.log(premiumOrders);
        } else {}
        
        if (customers_data.Ben10[6] >= 20) {
            ++premiumOrders;
            //console.log(premiumOrders);
        } else {}
        
        if (customers_data.Ben10[7] >= 20) {
            ++premiumOrders;
            //console.log(premiumOrders);
        } else {}
        if (customers_data.Ben10[8] >= 20) {
            ++premiumOrders;
            //console.log(premiumOrders);
        } else {}
        if (customers_data.Ben10[9] >= 20) {
            ++premiumOrders;
            //console.log(premiumOrders);
        } else {}
        if (customers_data.Ben10[10] >= 20) {
            ++premiumOrders;
            //console.log(premiumOrders);
        } else {}
        
        if (premiumOrders >= 5) {
            console.log("Ben10 is a premium member.");
        } else {console.log("Ben10 does not meet the criteria to be a premium member.")}
    }}

Sameer = {
        name: "Sameer",
        age: "15",
        premiumCheck: function() {
    
            var premiumOrders = 0;
     
            if (customers_data.Sameer[0] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Sameer[1] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
           
            if (customers_data.Sameer[2] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Sameer[3] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Sameer[4] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Sameer[5] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Sameer[6] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Sameer[7] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            if (customers_data.Sameer[8] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            if (customers_data.Sameer[9] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            if (customers_data.Sameer[10] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (premiumOrders >= 5) {
                console.log("Sameer is a premium member.");
            } else {console.log("Sameer does not meet the criteria to be a premium member.")}
        }}
Zeeshan = {
        name: "Zeeshan",
        age: "17",
        premiumCheck: function() {
        
            var premiumOrders = 0;
         
            if (customers_data.Zeeshan[0] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Zeeshan[1] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Zeeshan[2] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Zeeshan[3] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Zeeshan[4] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Zeeshan[5] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Zeeshan[6] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (customers_data.Zeeshan[7] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            if (customers_data.Zeeshan[8] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            if (customers_data.Zeeshan[9] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            if (customers_data.Zeeshan[10] >= 20) {
                ++premiumOrders;
                //console.log(premiumOrders);
            } else {}
            
            if (premiumOrders >= 5) {
                console.log("Zeeshan is a premium member.")
            } else {console.log("Zeeshan does not meet the criteria to be a premium member.")}
        }}

Ben10.premiumCheck();
Sameer.premiumCheck();
Zeeshan.premiumCheck();