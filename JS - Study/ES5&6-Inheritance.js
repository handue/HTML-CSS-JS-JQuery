// * ES5

var parent = {name:'Kim', age:50};

var child = Object.create(parent); // prototype of chlid = parent 

child.age = 20;

var grandson = Object.create(child);

grandson.name //this is kim



// * ES 6 - how to make constructor using ES6

class Parent{
    constructor(){
        this.name = 'Kim';
        // this.sayHi = function(){
        //     console.log('hello');
        // add in constructor
        // }
    }
    sayHi(){
        console.log('hello');
        //add in prototype
    }
}

var child = new Parent();
