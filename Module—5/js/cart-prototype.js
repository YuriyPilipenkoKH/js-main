const Bike = function (value) {
    // console.log(this);  
    this.a = value;
    }
    
    const myBike1 = new Bike(5)
    // console.log(myBike1);
    
     const myBike2 =new Bike(10)
    //  console.log(myBike2);
    //  ===============================
    
    const Car = function (brand,model,price) {
        this.brand = brand
        this.model = model
        this.price = price
    };
    
    const myCar1 = new Car('Audi','Q5',35000);
    // console.log(myCar1);
    
    const myCar2 = new Car('Volvo','XC79',45000);
    // console.log(myCar2);
    //  ===============================
    
    const Cart = function ({brand,model,price} = {}) {
        this.brand = brand
        this.model = model
        this.price = price
    };
    Cart.prototype.sayHi = function () {
        console.log(('Car.prototype.sayHi —>',this));
        console.log('HI');
    }
    
    Cart.prototype.changePrice = function (newPrice) {
        this.price = newPrice
    }
    
    // console.log(Cart.prototype);
    
    const myCart_1 = new Cart({
        brand: 'Audi',
        model: 'Q5',
        price: 35000,
        
    });
    // console.log(myCart_1);
    
    const myCart_2 = new Cart({
        brand: 'Volvo',
        model: 'XC70',
        price: 45000,
    });
    console.log(myCart_2);
    
    const myCart_3 = new Cart({
        // brand: 'Volvo',
        // model: 'XC70',
        // price: 45000,
    });
    // console.log(myCart_3);
    // myCart_1.sayHi()
    
    
    
    
    