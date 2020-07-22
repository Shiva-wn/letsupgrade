console.log("Oops");

class User {
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.lucoins=0;
        this.courses=[];

    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}
class Moderator extends User {
    constructor(name,age,email){
        super(name,age,email)
        this.lucoin=0;
    }
    addcoins(){
        this.lucoins++;
        console.log(`${this.name} has ${this.lucoins} coins`);
        return this;
    }
    delcoins(){
        this.lucoins--;
        console.log(`${this.name} has ${this.lucoins} coins`);
        return this;
    }
}
class Admin extends Moderator{
    addcourse(User,course){
        User.courses.push(course);
        console.log(User);
    }
    delcourse(User){
        User.courses.pop(this.courses);
        console.log(User);
    }
}
let user1=new User('Sonu',23,'s@gmail.com');
let user2=new User('Krish',24,'krish@gmail.com');
let user3=new User('Jyoti',21,'jyoti@gmail.com');
let mod =new Moderator('Berlin',24,'berlin@gmail.com','Moderator');
let admin=new Admin('Rio',22,'r@gmail.com');
let users=[user1,user2,user3,mod,admin];

users.forEach(element=>{
    console.log(element);
});
mod.addcoins().addcoins().addcoins().delcoins();

admin.addcourse(user1,'javascript');
admin.addcourse(user2,'java');
console.log(users);
admin.delcourse(user2);
console.log(users);
