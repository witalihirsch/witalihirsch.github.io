function displayDateTime() {
    var currentDateTime = new Date();
    var dateOptions = { month: 'short', day: '2-digit' };
    var timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    var date = currentDateTime.toLocaleDateString('en-US', dateOptions);
    var time = currentDateTime.toLocaleTimeString('en-US', timeOptions);
    document.getElementById("calendar-text").innerHTML = `${date} ${time}`;
}

displayDateTime();

function displayFullWeek() {
    var currentFullWeek = new Date();
    var weekOptions = { weekday: 'long' };
    var week = currentFullWeek.toLocaleDateString('en-US', weekOptions);
    document.getElementById("calendar-week").innerHTML = week;
}

displayFullWeek();

function displayDateYear() {
    var currentDateYear = new Date();
    var dateOptions = { month: 'long', day: 'numeric' };
    var yearOptions = { year: 'numeric' };
    var date = currentDateYear.toLocaleDateString('en-US', dateOptions);
    var year = currentDateYear.toLocaleDateString('en-US', yearOptions);
    document.getElementById("calendar-m-d-y").innerHTML = `${date} ${year}`;
}

displayDateYear();

function displayFullMonth() {
    var currentFullMonth = new Date();
    var monthOptions = { month: 'long' };
    var month = currentFullMonth.toLocaleDateString('en-US', monthOptions);
    document.getElementById("calendar-month").innerHTML = month;
}

displayFullMonth();