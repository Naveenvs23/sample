// function reverse (str) {
//     let result = str.split(" ")
//     .map(word=>word.split("").reverse().join(""))
//     .join(" ");
//     return result;
// }
// // console.log(reverse("Hello World"));

// function removevowels(str) {
//     let result = str.replace(/[aeiouAEIOU]/gi, "");
//     return result;
// }
// console.log(removevowels("Hello World"));
// function replace(str) {
//     return str.replaceAll(" ","+");
// }
// console.log(replace("Hello World"));

// function capitalize(str) {
//     return str
//     .split(" ")
//     .map(word=>
//         word.slice(0,-3)+
//          word.slice(-3).toUpperCase()
//         )
//          .join(" ");

// }
// console.log(capitalize("hello world"));


// let sentence = "I love JavaScript";
// let words = sentence.split(" ");

// console.log(words);
// let result="";
// for(let i=1; i<=5; i++){
//     result+=i+" ";
//     console.log(result);
// }
// let result = "";

// for(let i = 1; i <= 5; i++) {
//     result += i + " ";
// }

// console.log(result);


// let a=Math.min(...arr);
// console.log(a)
// function greet(name){
//    console.log(name);
// }

// function process(callback){
//    callback("Naveen");
// }

// process(greet);
// const user = {
//    name:"Naveen",
//    show(){
//       console.log(this.name);
//    }
// };


// let user = {
//     name:"Naveen",
//     age:18
// };

// for(let key in user){
//     console.log(key);
// }
// function longest(sentence){
//     let word=sentence.split(" ");
//     let long=word[0];
//     for(let i=0; i<word.length; i++){
//         if(word[i].length>long.length){
//             long=word[i];
//         }
//     }
//     return long;
// }
// console.log(longest("I Love... You........"));


// function without(students){
//     let result=[];
//     for(let i=0 ; i< students.length ; i++){
//         if(students[i].grade !== "A"){
//             result.push(students[i].name)
//         }
//     }
//     return result;

// }
// console.log(without([
//     { name: "Alice", grade: "A" },
//     { name: "Bob", grade: "B" },
//     { name: "Charlie", grade: "D" },
//     { name: "David", grade: "C" }
// ]));
// function upper(sent){
//     let a=sent.split(" ");
//       a[i]=a.length.slice(0,a.length-1)+a.length-1.toUpperCase();
// }

function reverse(str){
    return str
    .split(" ")
    .map(str=>str.split("").reverse().join(""))
    .join(" ")
}
console.log(reverse("i love js"))