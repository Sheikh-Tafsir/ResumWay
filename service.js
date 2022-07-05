/*let name=localStorage.getItem("name");
let imgLink=localStorage.getItem("imgLink");
let vphn=localStorage.getItem("vphn");
let vmel=localStorage.getItem("vmel");
let vgit=localStorage.getItem("vgit");
let vweb=localStorage.getItem("vweb");*/

/*localStorage.setItem("name","TAFSIR RAHMAN");
localStorage.setItem("imgLink","pp.jpg");
localStorage.setItem("vphn","01817530115");
localStorage.setItem("vmel","190041130tafsir@gmail.com");
localStorage.setItem("vgit","Tafsir");
localStorage.setItem("vweb","OctoJourney.com");*/


function myFunction() {
    var x=document.getElementById("nname");
    localStorage.setItem("name",x.value);

    x=document.getElementById("nprof");
    localStorage.setItem("vprf",x.value);

    x=document.getElementById("nimage");
    localStorage.setItem("imgLink",x.value);

    x=document.getElementById("nphone");
    localStorage.setItem("vphn",x.value);

    x=document.getElementById("nmail");
    localStorage.setItem("vmel",x.value);

    x=document.getElementById("ngith");
    localStorage.setItem("vgit",x.value);

    x=document.getElementById("nwebp");
    localStorage.setItem("vweb",x.value);

    x=document.getElementById("nabt");
    localStorage.setItem("vabt",x.value);

    x=document.getElementById("nskill1");
    localStorage.setItem("vskl1",x.value);

    x=document.getElementById("nskill2");
    localStorage.setItem("vskl2",x.value);

    x=document.getElementById("nskill3");
    localStorage.setItem("vskl3",x.value);

    x=document.getElementById("nskill4");
    localStorage.setItem("vskl4",x.value);

    x=document.getElementById("nskill5");
    localStorage.setItem("vskl5",x.value);

    x=document.getElementById("nundgrad");
    var y=document.getElementById("nundept");
    localStorage.setItem("vundgrad",x.value +" in " + y.value);
    //alert(x.value +" in " + y.value);

    x=document.getElementById("nscl");
    localStorage.setItem("vscl",x.value);

    x=document.getElementById("nclg");
    localStorage.setItem("vclg",x.value);

    x=document.getElementById("nwork1");
    localStorage.setItem("vwork1",x.value);

    x=document.getElementById("ndeswork1");
    localStorage.setItem("vdeswork1",x.value);

    x=document.getElementById("nwork2");
    localStorage.setItem("vwork2",x.value);

    x=document.getElementById("ndeswork2");
    localStorage.setItem("vdeswork2",x.value);

    x=document.getElementById("nwork3");
    localStorage.setItem("vwork3",x.value);

    x=document.getElementById("ndeswork3");
    localStorage.setItem("vdeswork3",x.value);


}
function inp(){
    let name=localStorage.getItem("name");
    name=name.toUpperCase();
    document.getElementById("fname").innerHTML=name;

    let imgLink=localStorage.getItem("imgLink");
    document.getElementById("proImg").src=imgLink;

    let vprf=localStorage.getItem("vprf");
    vprf=vprf.toUpperCase();
    document.getElementById("dprof").innerHTML=vprf;

    let vphn=localStorage.getItem("vphn");
    document.getElementById("dphone").innerHTML=vphn;

    let vmel=localStorage.getItem("vmel");
    document.getElementById("dmail").innerHTML=vmel;

    let vgit=localStorage.getItem("vgit");
    document.getElementById("dgith").innerHTML=vgit;

    let vweb=localStorage.getItem("vweb");
    document.getElementById("dwebp").innerHTML=vweb;

    let vabt=localStorage.getItem("vabt");
    document.getElementById("dabt").innerHTML=vabt;

    let vskl1=localStorage.getItem("vskl1");
    document.getElementById("dskill1").innerHTML=vskl1;

    let vskl2=localStorage.getItem("vskl2");
    document.getElementById("dskill2").innerHTML=vskl2;

    let vskl3=localStorage.getItem("vskl3");
    document.getElementById("dskill3").innerHTML=vskl3;

    let vskl4=localStorage.getItem("vskl4");
    document.getElementById("dskill4").innerHTML=vskl4;

    let vskl5=localStorage.getItem("vskl5");
    document.getElementById("dskill5").innerHTML=vskl5;

    let vundgrad=localStorage.getItem("vundgrad");
    document.getElementById("dundgrad").innerHTML=vundgrad;

    let vscl=localStorage.getItem("vscl");
    document.getElementById("dscl").innerHTML=vscl;

    let vclg=localStorage.getItem("vclg");
    document.getElementById("dclg").innerHTML=vclg;

    let vwork1=localStorage.getItem("vwork1");
    document.getElementById("dwork1").innerHTML=vwork1;

    let vdeswork1=localStorage.getItem("vdeswork1");
    document.getElementById("ddeswork1").innerHTML=vdeswork1;

    let vwork2=localStorage.getItem("vwork2");
    document.getElementById("dwork2").innerHTML=vwork2;

    let vdeswork2=localStorage.getItem("vdeswork2");
    document.getElementById("ddeswork2").innerHTML=vdeswork2;

    let vwork3=localStorage.getItem("vwork3");
    document.getElementById("dwork3").innerHTML=vwork3;

    let vdeswork3=localStorage.getItem("vdeswork3");
    document.getElementById("ddeswork3").innerHTML=vdeswork3;

    

}
function downld(){
    document.querySelector("#proImg").remove();
    const element = document.querySelector(".back");

    var opt = {
        margin:       0,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf()
    .set(opt)
    .from(element)
    .save();
}