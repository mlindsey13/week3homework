//user input variables
var enter;
var confirmNum;
var confirmChara;
var confirmLowercase;
var confirmUppercase;

chara = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", ",", "-", ".", "/", "|", "\:", "\;", "<", ">", "?", "[", "]", "`", "~", "{", "}", "\\"];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

space = [];

var selection;

// converts alpha to Uppercase
var toUpper = function(x){
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper)

var get = document.querySelector("#generate");

get.addEventListener("click", function(){
    pwd = generatePassword();
    document.getElementById("password").placeholder = pwd;
});

//function to generate password
function generatePassword() {
    enter = parseInt(prompt("choose between 8 and 128 characters for your password"));

    if (!enter) {
        alert("you need to enter a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("you must choose between 8 but no more than 128 characters"));
    } else {
        confirmChara = confirm("This will contain special characters");
        confirmNum = confirm("This will this contain numbers");
        confirmLowercase = confirm("This will contain lowercase characters");
        confirmUppercase = confirm("This will contain uppercase")



    if (!confirmChara && !confirmNum && !confirmLowercase && !confirmUppercase) {
        selection = alert("you must choose a password with numbers, lowercase, uppercase, special characters")

    } else if (confirmChara && confirmNum && confirmLowercase && confirmUppercase) {
        selection = chara.concat(alpha2, alpha, num);

    } else if (confirmChara && confirmNum && confirmUppercase) {
        selection = chara.concat(alpha2, num);
    } else if (confirmChara && confirmLowercase && confirmUppercase) {
        selection = chara.concat(alpha, alpha2);
    } else if (confirmChara && confirmNum && confirmLowercase) {
        selection = chara.concat(num, alpha);


    } else if (confirmChara && confirmNum) {
        selection = chara.concat(num);
    } else if (confirmChara && confirmLowercase) {
        selection = chara.concat(alpha);
    } else if (confirmChara && confirmUppercase) {
        selection = chara.concat(alpha2);
    } else if (confirmNum && confirmUppercase) {
        selection = num.concat(alpha2);
    } else if (confirmNum && confirmLowercase) {
        selection = num.concat(alpha);
    } else if (confirmLowercase && confirmUppercase) {
        selection = alpha.concat(alpha2);
    } else if (confirmChara) {
        selection = chara;
    } else if (confirmNum) {
        selection = num;
    } else if (confirmLowercase) {
        selection = alpha;
    } else if (confirmUppercase)
        selection = space.concat(alpha2);
}
var password = [];

for(var i = 0; i < enter; i++) {
    var pickSelection = selection[Math.floor(Math.random() * selection.length)]
    password.push(pickSelection);
}
var pwd = password.join("");
UserInput(pwd);
return pwd;
}

function UserInput(pwd) {
    document.getElementById("password").textContent = pwd;

}

//creates a copy to clipboard
var copy = document.querySelector("#copy");
copy.addEventListener("click", function(){
    copyPassword();
    });

function copyPassword() {
document.getElementById("password").select();
document.execCommand("Copy");
alert("password copied to clipboard")
}



