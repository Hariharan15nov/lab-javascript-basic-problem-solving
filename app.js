// Important Note - No Built-in functions to be used

    var prograd1="rajkumar";
    var prograd2="hariharan";
    console.log("The driver's name is:" + prograd1);
    console.log("The navigators's name is:" + prograd2);
    
// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Iteration 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(prograd1.length<prograd2.length){
    console.log("It seems that the navigator has the longest name, it has "+prograd2.length+" "+"characters");
}
else if(prograd1.length>prograd2.length){
    console.log("The driver has the longest name, it has "+prograd1.length+" "+"characters");
}
else{
    console.log("Wow, you both have equally long names, "+prograd1.length +" "+"characters!");
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
var vowels=['a','e','i','o','u'];
function checkvowel(user){
    var c=0;

    for(var i=0;i<user.length;i++){
        for(var j=0;j<vowels.length;j++){
            // checking prograd1
        if(vowels[j]==user[i]){
            console.log(vowels[j]);
            c=c+1;
        }
}
}
if(c==0){
    console.log("no vowels");
}
else{
    console.log(user,c);
}

}
 checkvowel(prograd1);
 checkvowel(prograd2);
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function countupperorlower(user){
    var capitalletter=0;
    var smallletter=0;
    for(var i=0;i<user.length;i++){
        if(/[A-Z]/.test(user.charAt(i))){
            capitalletter++;
        }
        else if(/[a-z]/.test(user.charAt(i))){
            smallletter++;
        }
    }
    console.log("capitalletter:"+ capitalletter+","+"smallletter"+smallletter);
}
countupperorlower(prograd1);
countupperorlower(prograd2);


// Iteration 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
function upper(user){
    var uppr="";
    var splitvar=user.split("");
    console.log(splitvar);
for(i=0;i<user.length;i++){
    uppr=uppr+splitvar[i]+" ";
}
uppr=uppr.toLocaleUpperCase();
console.log(uppr);
}
upper(prograd1);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
function navrev(user){
    var splitvar1;
     splitvar1=user.split("").reverse().join("");
     console.log(splitvar1);

}
navrev(prograd2);
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(prograd1+" "+prograd2);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
 function lexicographical(user){
     console.log(user.toUpperCase().split("").sort().join("").toLowerCase());
 }
 lexicographical(prograd1);
 lexicographical(prograd2);
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 