// *Variables*
// Declare a variable, assign it a value, and alert the value
let num = 10;
alert(num)
// Create a variable, divide it by 10, and console log the value
let x = 100;
console.log(x/10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeNo(x, y, z){
    alert(x*y*z)
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addAndSubNums(a, b, c ,d){
    console.log(a + b -c -d)
}
addAndSubNums(10, 20, 5, 2)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winnerThreeNumbers(x, y, z){
    let result = ((100 + x) -y) / z;
    if (result > 25){
        console.log('We have a winner')
    }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfTheWeek(day){
    //If day is Weekend
    if(day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday'){
        alert('weekend');
    //If day is Weekday
    } else if(day.toLowerCase() === 'monday' || day.toLowerCase() === 'tuesday' || day.toLowerCase() === 'wednesday' || day.toLowerCase() === 'thursday' || day.toLowerCase() === 'Friday'){
       alert('weekday')
    } else if( day === ""){
       alert('try again')
    }
}
dayOfTheWeek('')


//*Loops*
// //Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function comparison(x){
    //For loop to log all values in the range
    for(i = 1; i <= x; i += 3){
        console.log(i)
    }
}
comparison(66)