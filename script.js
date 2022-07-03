/* 
To get full name of months/days. 
Array with full names.
1. Use getMonth/getDay to get the zero-indexed value from the array.
2. Get the value name from array
*/

const oneDay = 24 * 60 * 60 * 1000;





// Days in year
//const yearDays = 365;

const firstName = "Ivan";
// const firstName = prompt("What's your name?");
// console.log(firstName); 

// const birthYear = prompt("What is year of your birth?");
const birthYear = 1987;
const birthDate = new Date('4/3/1987');

const today = new Date();
console.log(`Today is ==> ${today}.`);

const differenceInTime = today.getTime() - birthDate.getTime();

const differenceInDays = differenceInTime / (1000 * 3600 *24);

console.log(differenceInDays)


// Months full name Array
const months = [
     'January',
     'February',
     'March',
     'April',
     'May',
     'June',
     'July',
     'August',
     'September',
     'October',
     "November",
     'December'
]


// Days full name Array
const dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]


function calcAge(birthYear) {

    // Date Today
    const today = new Date(); // Today
    console.log(`Today is ==> ${today}.`);


    // Day Index 1.
    /* const dayIndex = today.getDay()
    console.log(`Day Index is ==> ${dayIndex}.`) 

    // Day Name 2.
    const dayName = days[dayIndex]
    console.log(`Day name is ==> ${dayName}.`)   */


    // Day Name 1 & 2
    // condensed version
    const todayDayName = days[today.getDay()];
    console.log(`Day Name is ==> ${todayDayName}.`);


    // Month Index 1.
    /* const monthIndex = today.getMonth()
    console.log(`Month Index is ==> ${monthIndex}.`) */

    // Month Name 2. 
    /* const monthName = months[monthIndex]
    console.log(`Today Month is ==> ${monthName}.`)  */


    // Month Name 1 & 2.
    // condensed version
    const monthName = months[today.getMonth()]
    console.log(`Today Month is ==> ${monthName}.`);

    // Today Date
    const date = today.getDate();
    console.log(`Today Date is ==> ${date}.`);
    
    // Today Year
    const year = today.getFullYear();
    console.log(`Today Year is ==> ${year}.`);

    // Formated today date.
    const formatted = `${todayDayName}, ${date} ${monthName} ${year}`;
    console.log(`Today is ${formatted}.`)

    const age = today.getFullYear() - birthYear;
    return age;
}

const age = calcAge(birthYear);
console.log(`${firstName} is ${age} years old.`)
console.log(age)


// Function to calculate leap years
function calcLeapYears() {
    console.log(age)
    const leapYears = age / 4;
    console.log(age)
    console.log(leapYears)
    return parseInt(leapYears);
}

const leapYears = calcLeapYears();
console.log(leapYears)


function calcDays() {
    console.log(age)
    const daysAlive = age * yearDays
    return daysAlive;
}

// const daysAlive = calcDays();
console.log(daysAlive);