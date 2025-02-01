
function User(username, password){
    this.username = username;
    this.password = password;

    return this;  //optional but recommended to use
}


// const user1 = User("ashish", "1234")
// const user2 = User("vivek", "1122")

const user1 = new User("ashish", "1234")
const user2 = new User("vivek", "1122")

console.log(user1);
console.log(user2);