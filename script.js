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
     var output = (resultsI * 31);
    document.getElementById("jany").innerHTML = "January income for leap year income is " + output;
    var output = (resultsI * 29);
    document.getElementById("feby").innerHTML = "February income for leap year income is " + output;
    var output = (resultsI * 31);
    document.getElementById("mary").innerHTML = "March income for leap year income is " + output;
    var output = (resultsI * 30);
    document.getElementById("apry").innerHTML = "April income for leap year income is " + output;
    var output = (resultsI * 31);
    document.getElementById("mayy").innerHTML = "May income for leap year income is " + output;
    var output = (resultsI * 30);
    document.getElementById("juny").innerHTML = "June income for leap year income is " + output;
    var output = (resultsI * 31);
    document.getElementById("julyy").innerHTML = "July income for leap year income is " + output;
    var output = (resultsI * 31);
    document.getElementById("augy").innerHTML = "August income for leap year income is " + output;
    var output = (resultsI * 30);
    document.getElementById("sepy").innerHTML = "September income for leap year income is " + output;
    var output = (resultsI * 31);
    document.getElementById("octy").innerHTML = "October income for leap year income is " + output;
    var output = (resultsI * 30);
    document.getElementById("novy").innerHTML = "November income for leap year income is " + output;
    var output = (resultsI * 31);
    document.getElementById("decy").innerHTML = "December income for leap year income is " + output;
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

    var resultsw = ((weekone * con) + (weektwo * con) + (weekthree * con) + (weekfour * con));
    document.getElementById("monthlypro").innerHTML = "Total monthly milk production as per week is " + resultsw + " litres";
    var resultsIM = (((weekone * con) + (weektwo * con) + (weekthree * con) + (weekfour * con))*price);
    document.getElementById("monthlyincome").innerHTML = "Total monthly income is ksh." + resultsIM;


    var resultsy = ((((weekone * con) + (weektwo * con) + (weekthree * con) + (weekfour * con)) * price) * year);
    document.getElementById("yearlyincome").innerHTML = "Total yearly income is Ksh. " + resultsy;
}
