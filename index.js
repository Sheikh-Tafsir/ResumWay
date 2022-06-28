function inp(){
    var name = window.prompt("Enter your name: ");
    document.querySelector("#fname").innerHTML=name;
    const element = document.querySelector(".back");
    html2pdf()
    .from(element)
    .save();
}