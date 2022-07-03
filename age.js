// Find BUG ctrl + f ---> BUG 


// -----------------------------------------------------------------------------
// -------------------------------  NAME ARRAYS  -------------------------------
// -----------------------------------------------------------------------------



// Months names
const monthsNames = [
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

// Day names
const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',  
]



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// --------------------------------  TODAY DAY  --------------------------------
// -----------------------------------------------------------------------------



let today = new Date();                            // Date Today // Mon Jan 1 2000 00:00:00
let todayInMs = Date.now();                        // Date Today in milliseconds // 1656448707844
let todayDay = today.getDay();                     // Today Day // 0-6
let todayDayName = dayNames[today.getDay()];       // Today Day Name

if (todayDay === 0) {                              // If today day index is 0 == Sunday ==> 7 == Sunday
    todayDay = 7;
}

let todayMonth = today.getMonth() + 1;              // Today Month  // 0-11 // +1 // add +1 to index // 1-12 // 
let todayMonthName = monthsNames[today.getMonth()]  // Today Month Name

let todayYear = today.getFullYear();                // Today Year 



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// --------------------  FUNCTIONS TO DISPLAY DATE AND TIME  -------------------
// -----------------------------------------------------------------------------



// Function to display today date
function showDate() {
    let todayDay = today.getDate();
    let todayDayName = dayNames[today.getDay()];
    let todayMonthName = monthsNames[today.getMonth()];
    let todayYear = today.getFullYear();
    let todayDate = todayDayName + ", "+ todayDay + ". " + todayMonthName + " " + todayYear + ".";

    document.getElementById("js-date__display").innerText = todayDate;
    document.getElementById("js-date__display").textContent = todayDate;

    setTimeout(showTime, 1000);

    return  todayDate; // Just returned for console log
}


// Function to display time 
function showTime(){
    let date = new Date();
    let h = date.getHours();   // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("js-clock__display").innerText = time;
    document.getElementById("js-clock__display").textContent = time;
    
    setTimeout(showTime, 1000);
    return time // Just returned for console log
}



// -----------------------------------------------------------------------------
// -------------------------- LOG TODAY TEST -----------------------------------
// -----------------------------------------------------------------------------



/* 

    console.group('Today');
    console.log(`${today}`)
    console.group('Today day in milliseconds')
    console.log(`${todayInMs} ms`)
    console.groupEnd();
    console.group('Today day in week')
    console.log(`${todayDay}.`)
    console.groupEnd();
    console.group('Today day name');
    console.log(`${todayDayName}`)
    console.groupEnd();
    console.group('Today month');
    console.log(`${todayMonth}.`)
    console.groupEnd();
    console.group('Today month name');
    console.log(`${todayMonthName}`)
    console.groupEnd();
    console.group('Today year');
    console.log(`${todayYear}.`)
    console.groupEnd();
    console.group('Today day formatted');
    console.log(showDate())
    console.groupEnd();
    console.group('Today time');
    console.log(showTime())
    console.groupEnd();

    
 */




// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ---------------------  LOOPS FOR DROPDOWM SELECT VALUES  --------------------
// -----------------------------------------------------------------------------



// Numbers od days in one month 1-31
let numberDays = "";

// Numbers of month in one year 1-12
let monthlength = monthsNames.length; // 12

// Years number from today - 150 years 
let years = "";


// Loop to create day option element and display day number
for (let day = 1; day < 32; day++) { // day = 1; 1 < 32; 1 + 2;
    numberDays += day +  ","; // x += y // x = x + y // "" + 1,2,3,4 ..
    const option = document.createElement("option"); // Create option element
    document.getElementById("js-selectDay").appendChild(option).value = day;  // Add element to dropdown select list
    const dayNumber = document.createTextNode(day + "."); // Create option element day number node .
    option.appendChild(dayNumber); // Append day number node to option element
}

// Loop to create month option element and display month name 
for (let i = 0; i < monthlength; i++) { // index = 0; 0 < 12; 0 = 1;
    const option = document.createElement("option"); // Create option element 
    document.getElementById("js-selectMonth").appendChild(option).value = i + 1; // Add element to dropdown list
    const monthName = document.createTextNode(monthsNames[i]); // Create option element month name node 
    option.appendChild(monthName); // Append month name node to option element
}

// Loop to create year option element and display year number
for (let year = todayYear; year > todayYear - 151; year--) { // year = today ; year is bigger than today- 150 -- ; today - 150 year 
    years += year +  ","; // x += y // x = x + y // "" - 2022,2021,2020,2019 ..  
    const option = document.createElement("option"); // Create option element
    document.getElementById("js-selectYear").appendChild(option).value = year;  // Add element to dropdown select list
    const yearNumber = document.createTextNode(year + "."); // Create year number node . 
    option.appendChild(yearNumber); // Append year number node to option element
}


// Days string
const daysString = numberDays; // 1,2,3,4,5,6,7

// Max days numberin month array
const maxDays = daysString.split(","); // [1,2,3,..28,29,30,31]

// Years string
const yearsString = years; // 2150,2149,2148,2147

// Years numbers array today year - 150 years
const yearsMax = yearsString.split(",").filter(e => e.length);



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ----------------------- FUNCTIONS TO GET SELECTED DATE  ---------------------
// -----------------------------------------------------------------------------



// Function to get selected Day 
function getBirthDay() {
    var selectDropdown = document.getElementById("js-selectDay"); // Day Dropdown list
    var selectedDay = selectDropdown.options[selectDropdown.selectedIndex].value; // Get day value
    return selectedDay;
}


// Function to get selected Month 
function getBirthMonth() {
    var selectDropdown = document.getElementById("js-selectMonth"); // Month Dropdown list
    var selectedMonth = selectDropdown.options[selectDropdown.selectedIndex].value; // Get month value
    return selectedMonth;
}


//Function to get selected Year 
function getBirthYear() {
    var selectDropdown = document.getElementById("js-selectYear"); // Year dropdown list
    var selectedYear = selectDropdown.options[selectDropdown.selectedIndex].value; // Get year value
    return selectedYear;
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ------------------------- FUNCTIONS TO SET BIRTH DATE  ----------------------
// -----------------------------------------------------------------------------



function setBirthDate() {
    const selectedDay = getBirthDay();
    const selectedMonth = ((getBirthMonth() - 1) + 1);
    const selectedYear = getBirthYear();
    const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
    return selectedDate;
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// --------------------------- LENGTH IN MILLISECONDS  -------------------------
// -----------------------------------------------------------------------------



// Return one day in ms // 86400000
function dayLength() {
    const msPerDay = 24 * 60 * 60 * 1000;
    return msPerDay;
}

// Return one week in ms // 604800000
function weekLength() {
    const msPerWeek = dayLength() * 7;
    return msPerWeek;
}

// Return one month in ms // 2629746000
function monthLength() {
    const msPerMonth = 2629746000;
    return msPerMonth;
}

// Return one year in ms // 31556952000
function yearLength() {
    const msPerYear = 31556952000;
    return msPerYear;
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// --------------------------- LENGTH IN MILLISECONDS  -------------------------
// -----------------------------------------------------------------------------



function calcDaysOld() {
    let selectedDate = setBirthDate();
    let daysOld = (today.getTime() - selectedDate.getTime()) / dayLength();
    // console.log(daysOld)
    return daysOld;
}

function calcWeeksOld() {
    let selectedDate = setBirthDate();
    let weeksOld = (today.getTime() - selectedDate.getTime()) / weekLength();
    //console.log(weeksOld)
    return weeksOld;
}

function calcMonthOld() {
    let selectedDate = setBirthDate();
    let monthsOld = (today.getTime() - selectedDate.getTime()) / monthLength();
    //console.log(monthsOld)
    return monthsOld;
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ------------------------ FUNCTION TO DISPLAY RESULTS  -----------------------
// -----------------------------------------------------------------------------



// Function to toggle content and results
function displayResults() {
    let results = document.querySelector("#js-results");
    let content = document.querySelector("#js-content");
    let footer = document.querySelector("#js-footer");
    if (results.style.display == "none") {
        results.style.display = "block";
        content.style.display = "none";
        footer.style.position = "relative";
    } else {
        results.style.display = "none";
        content.style.display = "block";
        footer.style.position = "fixed";
    }  
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



function calcAge() {
    let selectedDate = setBirthDate();
    let msPerDay = dayLength();
    letmsPerWeek = weekLength // Number of milliseconds per day
    let daysOld = (today.getTime() - selectedDate.getTime()) / msPerDay;
    let weeksOld = (today.getTime() - selectedDate.getTime()) / msPerDay;
    showData()
    calculateAge()
    return daysOld;
}



function showData() {
    let daysOld = calcDaysOld()
    let weeksOld = calcWeeksOld()
    let monthsOld = calcMonthOld()
    console.log(`You are ===> ${daysOld} days old. <===`)
    console.log(`You are ===> ${weeksOld} weeks old. <===`)
    console.log(`You are ===> ${monthsOld} months old. <===`)

    return daysOld;
}

function calculateAge() {
    var dateFuture = new Date(new Date().getFullYear() +1, 0, 1);
    let selectedDate = setBirthDate();
    console.log(dateFuture)
    console.log(selectedDate)

}





/* function calcAge() {
    const selectedDate = setBirthDate();
    const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
    let ageYears = (today.getTime() - selectedDate.getTime()) / msPerDay;
    ageYears = Math.round(ageYears)
    console.log(ageYears)
    return ageYears;
} */


/* function calcYears() {
    const selectedDay = getBirthDay();
    const selectedMonth = getBirthMonth();
    const selectedYear = getBirthYear();
    setDate()
    
    console.log(`${selectedDay}.${selectedMonth}.${selectedYear}. `);
    return todayYear - selectedYear;
}
 */



/* const oneDay = 24 * 60 * 60 * 1000;
const birthDate = new Date('4/3/1987')
const todayDate = new Date()


console.log(`Today is ${todayDate}.`)
document.getElementById("age").innerHTML = todayDate;

const diffDates = Math.round(Math.abs((birthDate - todayDate) / oneDay));

const diffDays = Math.round(Math.abs())

console.log(diffDates)
console.log(oneDay)
console.log(oneDay * 7)
const oneWeek = oneDay * 7
console.log(oneWeek / oneDay)
const daysOld = Math.round(Math.abs((diffDates - oneWeek) / oneDay));
console.log(daysOld)
 */


showDate();
showTime();





// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ------------------------ FUNCTION TO DISPLAY RESULTS  -----------------------
// -----------------------------------------------------------------------------




/* // Function to toggle content and results
function displayResults() {
    let results = document.querySelector("#js-results");
    let content = document.querySelector("#js-content");
    let footer = document.querySelector("#js-footer");
    if (results.style.display == "none") {
        results.style.display = "block";
        content.style.display = "none";
        footer.style.position = "relative";
    } else {
        results.style.display = "none";
        content.style.display = "block";
        footer.style.position = "fixed";
    }  
}


function positionFooter() {
    let footer = document.querySelector("#js-footer");
    let resu
} */

// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------







//results = document.querySelector('#js-content');
//console.log(window.getComputedStyle(results).display)

/* myFunction2() */

/* myFunction2() */





// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ----------------------------- DISPLAY BUG FIX -------------------------------
// -----------------------------------------------------------------------------
/* 
    BUG FIX ---->   Bug:    
                            When I display the results the body is short
                            and the background color does not cover the
                            whole body.

                    Fix:
                            Is ​​a function that checks the display
                            of the results, if the display is "block",
                            the body style height is 100%, if not,
                            then it is set to empty and takes the
                            already set style from base scss.

                            ** Try to fix it later in another way.

*/

function bodyHeightFull() {
    let results = document.getElementById("js-results");
    let body = document.getElementById("js-body");
    let fullHeight = 100 + "%";
    

    if (results.style.display === "block") {
        body.style.height = fullHeight;
    } else {
        body.style.height = ""
    }


    /*
    
    console.group('Results display');
    console.log(`${results.style.display}`)
    console.groupEnd();
    console.group('Body Height')
    console.log(body.style.height);
    console.groupEnd();
    
    */


}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------


