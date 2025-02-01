const user = {
    username: "Ashsih",
    email: "ashish@gmail.com",

    getUserDetails: function (){
        console.log("this is user details: ", this.username , this.email);

        //console.log(this);
    }
}

//console.log(user);
//console.log(user.getUserDetails());
//console.log(this);


// code reusability 
const user2 = {
    username: "Ashsih",
    email: "ashish@gmail.com",

    getUserDetails: function (){
        console.log("this is user details: ", this.username , this.email);

        //console.log(this);
    }
}

const user3 = {
    username: "Ashsih",
    email: "ashish@gmail.com",

    getUserDetails: function (){
        console.log("this is user details: ", this.username , this.email);

        //console.log(this);
    }
}
