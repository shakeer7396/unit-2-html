document.querySelectorAll("#two")[0].addEventListener("click",abc);
function abc(){
    document.querySelectorAll("#two")[0].classList.toggle("xyz");

    var a=document.querySelectorAll("#two")[0].classList;
    console.log(a);
}