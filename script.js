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
}