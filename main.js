function checkEmail(str)
{
    let regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regexp.test(str))
    {
         return  true;
    }
    else
    {
         return  false;
    }

}

let email = "a@gmail.com";
console.log(checkEmail(email));
email = "ab@yahoo.com";
console.log(checkEmail(email));
email = "abc@hotmail.com";
console.log(checkEmail(email));
email = "@gmail.com";
console.log(checkEmail(email));
email = "ab@gmail.";
console.log(checkEmail(email));
email = "@#abc@gmail.com";
console.log(checkEmail(email));
email = "0ab@.com";
console.log(checkEmail(email));