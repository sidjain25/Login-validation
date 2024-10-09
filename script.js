// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let flag = 1;

// function validateform(){
//     if(username.value == ""){
//     document.getElementById("userError").innerHTML ="User Name is empty";
//     flag = 0;
//     }else if(username.value.length<3){
//         document.getElementById("userError").innerHTML ="User Name require min 3 character";
//         flag = 0;
//     }else {
//         document.getElementById("userError").innerHTML ="";
//         flag = 1;
//     }

//     if(password.value == ""){
//         document.getElementById("passError").innerHTML = "Password is empty"
//         flag = 0;
//     }else if (password.value.length<3){
//         document.getElementById("passError").innerHTML="password is require 3char";
//         flag = 0;
//     }else{
        
//         document.getElementById("passError").innerHTML=""
//         flag = 1;
//     }
//     if(flag){
//             return true;
//     }else{
//             return false;
//     }
// }


//  SAHI CODE HAI YEH

let username = document.getElementById("username");
let password = document.getElementById("password");

function validateform() {
    let flag = 1; // हर बार validateform कॉल होने पर flag को 1 पर रीसेट करें

    if (username.value == "") {
        document.getElementById("userError").innerHTML = "User Name is empty";
        flag = 0;
    } else if (username.value.length < 3) {
        document.getElementById("userError").innerHTML = "User Name require min 3 character";
        flag = 0;
    } else {
        document.getElementById("userError").innerHTML = "";
    }

    if (password.value == "") {
        document.getElementById("passError").innerHTML = "Password is empty";
        flag = 0;
    } else if (password.value.length < 3) {
        document.getElementById("passError").innerHTML = "Password is require 3 char";
        flag = 0;
    } else {
        document.getElementById("passError").innerHTML = "";
    }

    if (flag == 1) {
        return true; // यदि कोई भी शर्त गलत नहीं है तो true रिटर्न करें
    } else {
        return false; // यदि कोई भी शर्त गलत है तो false रिटर्न करें
    }
}
