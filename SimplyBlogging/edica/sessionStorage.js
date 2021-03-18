
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
    sessionStorage.setItem("blogInfo",JSON.stringify(blogData));
 }
function retrieveFromSession() {
     //var obj = JSON.parse(localStorage.getItem("empInfo"));
     var obj = JSON.parse(sessionStorage.getItem("blogInfo"));
     console.log(obj);
     console.log(obj.length)

    // obj.forEach(element => {
    //     document.getElementById("titleInfo").innerHTML=element.title;       //below lines are to display the data
    //     document.getElementById("descInfo").innerHTML=element.desc;
    //     document.getElementById("imageInfo").src=element.imageInfo;
    // });


    for(i=0;i<obj.length;i++){
        console.log(obj[i].title)
        console.log(obj[i].desc)
        console.log(obj[i].imageInfo)
        document.getElementById("titleInfo").innerHTML=obj[i].title;       //below lines are to display the data
        document.getElementById("descInfo").innerHTML=obj[i].desc;
        document.getElementById("imageInfo").src=obj[i].imageInfo;
    }

     

 }

function resetData() {
    document.getElementById("titleInfo").value="";
    document.getElementById("descInfo").value="";
    document.getElementById("imageInfo").value="";
}
