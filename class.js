
class emp {

    constructor(names) {
        console.log("emp COnstructor called.....");
        this.name = names
    }

    getName() {
        return `${this.name}`
    }

}


class mng extends emp {

    constructor(n, d) {
        super(n)
        this.department = d;
    }

     getName(){
        console.log("hiiiii");
        
     }


    Info(){
        this.getName()
        super.getName()
        return `${this.name} is manager of department`
    }

}

let manager = new mng("vishvjeet", 'web developer');
console.log(manager.getName());
console.log(manager.Info());
