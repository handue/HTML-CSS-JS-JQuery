var arr = [2,3,4];

// 변수별로 array 별 하나씩 넣을 수 있음. a=2,b=3,c=4 이런식
var [a,b,c = 10] = [2,3];

// var obj = {name: 'KIM', age:30};

// var name = obj.name;
// var age = obj.age;
var name = "hi";
var age = 23;

//*위랑 같은 의미. name:나이 이거는 name이라는 변수명을 나이로 바꾼거임. */
var {name: 나이 ,age = 31} = {name: 'Kim'};

var obj = {name:this.name, age:this.age};

// * 이것도 var obj = {this.name, age}; 이렇게 해도 된다네