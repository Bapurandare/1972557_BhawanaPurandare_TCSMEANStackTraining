//get the data from html, write a submit button for the form and send the data to that function to JS in the backend
// In Js, write a function that takes three inputs, and put them in a newly created object
//use object.stringify to convert the data into string format
//save the string formatted data in session storage

//In the finance view page, get the data from the session, parse it, and display data in the table


var budgetObj =[];

function storeInSession() {
    sessionStorage.setItem("budgetInfo",budgetObj)
    resetData()
}

function retrieveFromSession() {
    var obj = sessionStorage.getItem("budgetInfo");
    console.log(obj);
}

function onFormSubmit(){   //for the storing of budget data
    //alert("Event generated...")
    var data = readBudgetData();
    //insertNewRecord(data);
    budgetObj.push(JSON.stringify(data));      //in empObj
    resetData();
}

function readBudgetData(){      //for reading the user data

    var budgetObj = {}

    budgetObj.clientName = document.getElementById("client").value;
    budgetObj.projectName = document.getElementById("project").value;
    budgetObj.budgetValue = document.getElementById("budget").value;

    console.log(budgetObj);
    return budgetObj;
}


function displayBudgetData(){
    var obj = sessionStorage.getItem("budgetInfo");

    console.log(obj)
    var bObj = JSON.parse(obj);
    console.log(bObj.clientName)
    console.log(bObj.projectName)
    console.log(bObj.budgetValue)

    sum = bObj.budgetValue + eval(sum)
    console.log("sum is:"+sum)

    var table = document.getElementById("budgetList")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = bObj.clientName;
    
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = bObj.projectName;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = "$"+bObj.budgetValue;

}

function resetData(){
    document.getElementsById("clientName").value="";
    document.getElementById("projectName").value="";
    document.getElementById("budgetValue").value="";
}