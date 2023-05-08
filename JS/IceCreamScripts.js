//function to calculate the total
function GetTotal(){
    //declare and initalize all needed variables
    let numOfScoops = document.getElementById("txtNumOfScoops").value, cost = 2.25;
    let cbCone = document.getElementById("rdCone");

    //debug to console
    console.log("the number of scoops is " + numOfScoops);   

    if (numOfScoops > 1) {
        let exScoops = 1.25 * (numOfScoops - 1)
        cost += exScoops;
    }

    document.getElementById("TotalDue").innerHTML = cost.toFixed(2);

}

