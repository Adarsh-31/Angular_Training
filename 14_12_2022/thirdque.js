var isPalindrome = function (name) {
    if (name == name.split("").reverse().join("")) {
        console.log("Is a Plaindrome");
    }
    else {
        console.log("Not a palindrome");
    }
};
isPalindrome("chintu");
