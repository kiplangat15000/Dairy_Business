function calculate() {
    var shedA = document.getElementById("milk-a").value;
    var shedB = document.getElementById("milk-b").value;
    var shedC = document.getElementById("milk-c").value;
    var shedD = document.getElementById("milk-d").value;

    var price = 45;
    var day = 7;
    var monthD = 30;
    var yearly = 12;
    var con = 1;


    var results = ((shedA*con)+(shedB*con)+(shedC*con)+(shedD*con));
    document.getElementById("totalD").innerHTML = "Total Daily Milk production is " + results+ " litres";


    var resultsI = ((shedA * price) + (shedB * price) + (shedC * price) + (shedD * price));
    document.getElementById("dailyincome").innerHTML = "Total daily income milk production is Ksh." + resultsI;

    var resultM = (((shedA * price) + (shedB * price) + (shedC * price) + (shedD * price))*day);
    document.getElementById("weeklyincome").innerHTML = "Total income per week is Ksh " + resultM;


    function calculate2() {
        var leepYear = [
            { value: "January", days: 31 },
            { name: "February", days: 29 },
            { name: "March", days: 31 },
            { name: "April", days: 30 },
            { name: "May", days: 31 },
            { name: "June", days: 30 },
            { name: "July", days: 31 },
            { name: "August", days: 31 },
            { name: "September", days: 30 },
            { name: "October", days: 31 },
            { name: "November", days: 30 },
            { name: "December", days: 31 },
            
        ]
    }
}


function weeklyincome() {
    var weekone = document.getElementById("week_1").value;
    var weektwo = document.getElementById("week_2").value;
    var weekthree = document.getElementById("week_3").value;
    var weekfour = document.getElementById("week_4").value;

    var price = 45;
    var days = 7;
    var con = 1;
    var weeks = 4;
    var year = 12;
}
