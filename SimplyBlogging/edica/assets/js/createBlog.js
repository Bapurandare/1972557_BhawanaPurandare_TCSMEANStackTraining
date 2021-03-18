
var blogData = [];

function onFormSubmit(){
    //alert("Event generated...")
    var data = readBlogData();      //'data' is a reference that is pointing to an object that readBlogData() function returns
    displayData(data);
    blogData.push(data);      
    console.log(blogData)
    //resetData();
}

function readBlogData(){

    var obj = {} 

    obj.title = document.getElementById("title").value;
    obj.desc = document.getElementById("desc").value;
    obj.imageInfo = document.getElementById("imageId").files[0].name;
    console.log(obj.title)
    console.log(obj.desc)
    console.log(obj.imageInfo)
    return obj;
}

function displayData(data){

    //console.log(data)
    document.getElementById("titleInfo").innerHTML=data.title;       //below lines are to display the data
    document.getElementById("descInfo").innerHTML=data.desc;
    document.getElementById("imageInfo").src=data.imageInfo;
}

function storeInSession() {
    // localStorage.setItem("empInfo",JSON.stringify(empData));
    localStorage.setItem("blogInfo",JSON.stringify(blogData));
}

function retrieveFromSession() {
     //var obj = JSON.parse(localStorage.getItem("empInfo"));
     var obj = JSON.parse(localStorage.getItem("blogInfo"));
     console.log(obj);
     console.log(obj.length)

    obj.forEach(element => {
        console.log(element.title)
        console.log(element.desc)
        console.log(element.imageInfo)
        document.getElementById("titleInfo").innerHTML=element.title;       //below lines are to display the data
        document.getElementById("descInfo").innerHTML=element.desc;
        document.getElementById("imageInfo").src=element.imageInfo;
    });  

    // for(i=0;i<obj.length;i++){
    //     console.log(obj[i].title)
    //     console.log(obj[i].desc)
    //     console.log(obj[i].imageInfo)
    //     document.getElementById("titleInfo").innerHTML=obj[i].title;       //below lines are to display the data
    //     document.getElementById("descInfo").innerHTML=obj[i].desc;
    //     document.getElementById("imageInfo").src=obj[i].imageInfo;
    // }
}

function cleanStorage(){
    localStorage.clear();
}

function readyToPrint() {

    var obj = JSON.parse(localStorage.getItem("blogInfo"));
    console.log(obj);
    console.log(obj.length)

    obj.forEach(element => {
        var section1 = document.createElement("h3");
        var section2 = document.createElement("h5");
        var section3 = document.createElement("hr");
        

        console.log("the elements are: " + element.title)
        section1.innerHTML = element.title;
        section1.style.cssText = 'text-align: center;';

        section2.innerHTML = element.desc;
        section2.style.cssText = 'text-align: center;';

        var img = document.createElement('img');
        img.src = element.imageInfo;

        img.style.cssText = 'margin-left: auto;margin-right: auto;display: block;width: 25%;';

        $("#tit").append(section1);
        $("#tit").append(img);
        $("#tit").append(section2);
        $("#tit").append(section3);

    });


    // for(var i in tit){
    //     var element = document.createElement("div");
    //     element.innerHTML = tit[i];
    //     $("#tit").append(element);
    // }



    // var tit = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];

    // for (var i in tit) {
    //     var element = document.createElement("h2");
    //     element.innerHTML = tit[i];
    //     $("#tit").append(element);
    // }
}

function resetData() {
    document.getElementById("titleInfo").value="";
    document.getElementById("descInfo").value="";
    document.getElementById("imageInfo").value="";
}
