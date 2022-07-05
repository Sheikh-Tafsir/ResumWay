function settmax(){
    var myVar=document.querySelector(".sidebar");
    myVar.classList.add("sidebarv");
    document.querySelector(".xmark").style.visibility = "visible";
    document.querySelector(".bars").style.visibility = "hidden";
}
function settmin(){
    var myVar=document.querySelector(".sidebar");
    myVar.classList.remove("sidebarv");
    document.querySelector(".xmark").style.visibility = "hidden";
    document.querySelector(".bars").style.visibility = "visible";
}