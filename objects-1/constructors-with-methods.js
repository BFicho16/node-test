// We can use constructors to define properties and methods
// that we can use across our program to create objects with
// similar properties


// creates a constructor Rectangle that takes 2 parameters
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  // methods for this constructor to calculate area and perimeter
  this.calcArea = function() {
      return this.height * this.width;
  };
  this.calcPerimeter = function () {
      return (this.height*2 + this.width*2);
  }
  
}

// examples of using the above constructor in a program
var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();


//---------------- ANOTHER EXAMPLE ------------------- //

// constructor Rabbit that takes 1 parameter
function Rabbit(adjective) {
    this.adjective = adjective;
    // creates a methit for describing the rabbit
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy")