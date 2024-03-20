var usernames = [];
function signUp() {
    var response = prompt("Would you like to sign up? (yes/no)").toLowerCase();
    if (response === "yes") {
        var name = prompt("Please enter your name:");
        usernames.push(name);
        console.log("User successfully signed up");
    } else if (response === "no") {
        console.log("User Not Sign Up");
    } else {
        console.log("Please Enter Your Name");
    }
}
signUp();
console.log("Usernames array:", usernames);
