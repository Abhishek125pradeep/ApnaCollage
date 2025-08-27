

class CreateUser {



    constructor(firstname, lastname, age) {

        this.firstname = firstname,
            this.lastname = lastname,
            this.age = age

        this.getFullName();
        this.getBirthYear()

    }

    getBirthYear() {


        console.log(new Date().getFullYear() - this.age);





    }

    getFullName() {
        console.log(`${this.firstname}  ${this.lastname}`);

    }




}


const User1 = new CreateUser("Abhishek", "Nagrale", 34);
const User2 = new CreateUser("lalan", "yadav", 78);

