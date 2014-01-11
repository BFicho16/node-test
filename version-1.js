// this.total = this.total + itemCost is the same as this.total += itemCost
// In general, a += b means "add b to a and put the result of that addition 
// back into a. This is also available for the other basic arithmetic 
// functions: -=, *=, and /= do what you expect.

var cashRegister = {
    total:0,

//insert the add method here    
    add: function(itemCost) {
        this.total += itemCost;
    },
    
    scan: function(item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
       case "magazine":
           this.add(4.99);
           break;
        
        case "chocolate":
            this.add(0.45);
            break;
        }
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("eggs");
cashRegister.scan("eggs");

//Show the total bill
console.log('Your bill is '+cashRegister.total);




