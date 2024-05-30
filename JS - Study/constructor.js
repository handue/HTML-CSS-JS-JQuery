    var student1 = { 
        name: "Kim", 
        age: 15,
       
    };

    // student1.sayHi();

    //constructor 는 앞에 대문자로 생성 student x Student o
    function Student(name, age) {
      this.name = name;
      this.age = age;
      this.sayHi = function(){
            console.log('안녕하세요'+this.name+'입니다.');
        }
    }

    Student.prototype.gender = '남';
    
    var student1 = new Student('Kim');
    var student2 = new Student('Jeong');
    var student3 = new Student('Park');

    student1.sayHi();
    student2.sayHi();
    student3.sayHi();

  