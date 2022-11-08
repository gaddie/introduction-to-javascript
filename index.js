// var myName = "gadson";
// alert(myName);

// var char = prompt('Enter: ');
// var num = 180;
// var rem = num - char.length;
// var total = char.length;
// alert('you have writen' + ' ' + total + " " + 'and you have' + ' ' + rem + 'words remaining')

// function myFunction() {
//     var x = document.getElementById("myText").value;
//     document.getElementById("demo").innerHTML = x;
// }
// console.log(myFunction);


// function getMilk() {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

// function bmiCalculator(weight, height) {  
//     var calc = weight / (height ** 2);
   
//     return Math.round(calc);
  
//   }


// bmiCalculator(62, 1.5);

// var fName = prompt("f Name");
// var LName = prompt("l Name");

// var n = Math.random();
// n = n * 6;
// n = Math.floor(n + 1);
// percent = Math.floor((n / 6) * 100);
// console.log(percent);

// function isLeap() {
//     var year = prompt('Enter a year')
    
//     if (year % 4 == 0) {
//         if (year % 100 == 0) {
//             return year + ' is not a leap year'
//             if (year % 400 == 0) {
                
//             }
//         } else {
//             return year + ' is a leap year'
//         }
//     } else {
//         return year + " is not a leap year"
//     }
// }
// isLeap();


// var myList = ['gaddy', 'son', 'dan', 'kevin'];

// function nameChecker() {
//     var name = prompt('What is your name')
    
//     if (myList.includes(name) == true) {
//         return 'Accepted';
//     } else {
//         return 'Denied'
//     }
// }

// nameChecker();

// var myList = [];
// var count = 100;

// function beer() {
//     while(count >= 1){
//         var removeOne = count - 1;
//         myList.push(count + " bottles of beer on the wall " + count + " bottles of beer, take 1 down,  pass it around " + removeOne + " bottles of beer on the wall")
//         count--
//     }
    
// }

// beer();


var mylist = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            mylist.push("FizzBuzz");
        } else if (count % 3 === 0) {
            mylist.push("Fizz");
        } else if (count % 5 === 0) {
            mylist.push("Buzz");
        } else {
            mylist.push(count);
        }
        count++;
    }
}

fizzBuzz();

function fibenacciGenerator() {
    var fib = [0, 1];
    for (var i = 2; i < 10; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}


// document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "gadson";
document.getElementsByTagName("li")[2].innerHTML = "gadson";
document.querySelector("li a").style.color = "red";
document.querySelectorAll("li")[1].style.color = "blue";
document.querySelector('button').style.backgroundColor = "yellow";
// document.querySelector('button').classList.add("invisible");
// document.querySelector('button').classList.remove("invisible");
// document.querySelector('button').classList.toggle("invisible");
document.querySelector('h1').classList.toggle("huge");
document.querySelector('h1').textContent = "Goodbye";
