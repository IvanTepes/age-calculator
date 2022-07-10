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
// --------------------------------  TODAY DAY  --------------------------------
// -----------------------------------------------------------------------------



let today = new Date(); // Date Today // Mon Jan 1 2000 00:00:00
let todayInMs = Date.now(); // Date Today in milliseconds // 1656448707844

let todayDay = today.getDay(); // Today Day // 0-6
let todayDayName = dayNames[today.getDay()]; // Today Day Name

let todayMonth = today.getMonth();
let todayMonthName = monthsNames[today.getMonth()] // Today Month Name

let todayYear = today.getFullYear(); // Today Year 



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// --------------------  FUNCTIONS TO DISPLAY DATE AND TIME  -------------------
// -----------------------------------------------------------------------------



// Function to display today date
function displayDate() {
    let todayDay = today.getDate();
    let todayDayName = dayNames[today.getDay()];

    let todayMonthName = monthsNames[today.getMonth()];

    let todayYear = today.getFullYear();

    let todayDate = todayDayName + ", "+ todayDay + ". " + todayMonthName + " " + todayYear + ".";

    document.getElementById("js-display__date").innerText = todayDate;
    document.getElementById("js-display__date").textContent = todayDate;

    setTimeout(displayDate, 1000);
    return todayDate; // Just returned for console log
}


// Function to display today time 
function displayTime() {
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

    document.getElementById("js-display__time").innerText = time;
    document.getElementById("js-display__time").textContent = time;
    
    setTimeout(displayTime, 1000);
    return time // Just returned for console log
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ---------------------  LOOPS FOR DROPDOWM SELECT VALUES  --------------------
// -----------------------------------------------------------------------------



// Numbers od days in one month 1-31
let numberDays = "";

// Numbers of month in one year 0-11
let monthlength = monthsNames.length;

// Years number from today - 150 years 
let years = "";


// Loop to create day option element and display day number
for (let day = 1; day < 32; day++) { // day = 1; 1 < 32; 1 + 2;
    numberDays += day +  ","; // x += y // x = x + y // "" + 1,2,3,4 ..

    let option = document.createElement("option"); // Create option element
    document.getElementById("js-selectDay").appendChild(option).value = day;  // Add element to dropdown select list

    let dayNumber = document.createTextNode(day + "."); // Create option element day number node .
    option.appendChild(dayNumber); // Append day number node to option element
}


// Loop to create month option element and display month name 
for (let i = 0; i < monthlength; i++) { // index = 0; 0 < 12; 0 = 1;
    
    let option = document.createElement("option"); // Create option element 
    document.getElementById("js-selectMonth").appendChild(option).value = i; // Add element to dropdown list

    let monthName = document.createTextNode(monthsNames[i]); // Create option element month name node 
    option.appendChild(monthName); // Append month name node to option element
}


// Loop to create year option element and display year number
for (let year = todayYear; year > todayYear - 151; year--) { // year = today ; year is bigger than today- 150 -- ; today - 150 year 
    years += year +  ","; // x += y // x = x + y // "" - 2022,2021,2020,2019 ..  

    let option = document.createElement("option"); // Create option element
    document.getElementById("js-selectYear").appendChild(option).value = year;  // Add element to dropdown select list

    let yearNumber = document.createTextNode(year + "."); // Create year number node . 
    option.appendChild(yearNumber); // Append year number node to option element
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ----------------------- FUNCTIONS TO GET SELECTED DATE  ---------------------
// -----------------------------------------------------------------------------



// Function to get selected Day 
function getBirthDay() {
    let selectDropdown = document.getElementById("js-selectDay"); // Day Dropdown list
    let selectedDay = selectDropdown.options[selectDropdown.selectedIndex].value; // Get day value
    return selectedDay;
}


// Function to get selected Month 
function getBirthMonth() {
    let selectDropdown = document.getElementById("js-selectMonth"); // Month Dropdown list
    let selectedMonth = selectDropdown.options[selectDropdown.selectedIndex].value; // Get month value
    return selectedMonth;
}


//Function to get selected Year 
function getBirthYear() {
    let selectDropdown = document.getElementById("js-selectYear"); // Year dropdown list
    let selectedYear = selectDropdown.options[selectDropdown.selectedIndex].value; // Get year value
    return selectedYear;
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ------------------------- FUNCTIONS TO SET BIRTH DATE  ----------------------
// -----------------------------------------------------------------------------



// Function to set birth date
function setBirthDate() {
    const selectedDay = getBirthDay();
    const selectedMonth = getBirthMonth();
    const selectedYear = getBirthYear();
    const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
    return selectedDate; // Return date-time object
}


// Function to set birth date for next birthday.
function setNextBirthDate() {
    let todayMonth = today.getMonth(); // 0-11
    let todayYear = "";

    let birthDate = setBirthDate().getDate(); // 1-31
    let birthMonth = setBirthDate().getMonth(); // 0-11

    
    if (birthMonth > todayMonth) { // To check if aready had birthday 
        todayYear = today.getFullYear(); //  Year 
        console.log(todayYear);
    } else {
        todayYear = today.getFullYear() + 1; // Year +1 // Aready have birthday this year
        console.log(todayYear);
    }

    
    let nextBirthDate = new Date(todayYear, birthMonth, birthDate);
    //console.log(todayDate);
    //console.log(todayMonth);
    //console.log(todayYear);
    //console.log(birthDate);
    //console.log(birthMonth);
    console.log(nextBirthDate);
    return nextBirthDate;
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
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
// --------------------------- FUNCTIONS TO CALCULATE OLD   --------------------
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

function calcYearsOld() {
    let selectedDate = setBirthDate();
    let yearsOld = (today.getTime() - selectedDate.getTime()) / yearLength();
    //console.log(monthsOld)
    return yearsOld;
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ------------------------ FUNCTIONS TO DISPLAY RESULTS  -----------------------
// -----------------------------------------------------------------------------



function dispOption() {
    let elem = document.getElementById("js-selectDay");
    console.log(elem)
}


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


    bodyHeightFull()
    displayBirthDate();
    setNextBirthDate();
    displayRemainingDays()
    displayNextBirthday()
    displayAge();
}


// Function to display birth date
function displayBirthDate() {
    let birthDate = setBirthDate(); // Date object

    let birthDayDate = birthDate.getDate(); // Day date 1-31
    let birthDay = birthDate.getDay();  // Day 0-6, 0 = Sunday, 6 = Saturday
    let birthDayName = dayNames[birthDay]; // Monday ....

    let birthMonth = getBirthMonth(); // 0-11
    let birthMonthName = monthsNames[birthMonth]; // 0 = January -- 11 = December

    let birthYear = getBirthYear(); // Year
    let birthDateFormated = birthDayDate + ". " + birthMonthName + " " + birthYear + " . ";

    document.getElementById("js-displayBirthDate").innerText = birthDateFormated;
    document.getElementById("js-displayBirthDate").textContent = birthDateFormated;
    document.getElementById("js-displayBirthDayName").innerText = birthDayName;
    document.getElementById("js-displayBirthDayName").textContent = birthDayName;


    return  birthDateFormated; // Just returned for console log
}


// Function to display days till next birthday
function displayRemainingDays() {
    let todayDate = today.getTime();
    let birthDate = setNextBirthDate().getTime();
    let daysRemaining = (birthDate - todayDate) / dayLength();
    //console.log(todayDate)
    //console.log(birthDate)
    //console.log(daysRemaining)
    
    document.getElementById("js-days-remaining").innerText = Math.ceil(daysRemaining);
    document.getElementById("js-days-remaining").textContent = Math.ceil(daysRemaining);
}


function displayNextBirthday() {
    let birthDay = setNextBirthDate().getDay();  // Day 0-6, 0 = Sunday, 6 = Saturday
    let birthDayName = dayNames[birthDay]; // Monday ....

    console.log(birthDay)
    console.log(birthDayName)

    document.getElementById("js-displayNextBirthDay").innerText = birthDayName;
    document.getElementById("js-displayNextBirthDay").textContent = birthDayName;
}


function displayAge() {
    let daysOld = calcDaysOld();
    let weeksOld = calcWeeksOld();
    let monthsOld = calcMonthOld();
    let yearsOld = calcYearsOld();
    // console.log(`You are ===> ${daysOld} days old. <===`)
    // console.log(`You are ===> ${weeksOld} weeks old. <===`)
    // console.log(`You are ===> ${monthsOld} months old. <===`)
    // console.log(`You are ===> ${yearsOld} years old. <===`)

    document.getElementById("js-age-days").innerText = Math.floor(daysOld);
    document.getElementById("js-age-days").textContent = Math.floor(daysOld);
    document.getElementById("js-age-weeks").innerText = Math.floor(weeksOld);
    document.getElementById("js-age-weeks").textContent = Math.floor(weeksOld);
    document.getElementById("js-age-months").innerText = Math.floor(monthsOld);
    document.getElementById("js-age-months").textContent = Math.floor(monthsOld);
    document.getElementById("js-age-years").innerText = Math.floor(yearsOld);
    document.getElementById("js-age-years").textContent = Math.floor(yearsOld);
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



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





// Display date and time
displayDate();
displayTime();