let isPalindrome = (name)=> {
    if(name==name.split("").reverse().join(""))
    {
      console.log("Is a Palindrome");
    }
    else
    {
      console.log("Not a palindrome");
    }
}
isPalindrome("chintu");