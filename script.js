var scrollButton=document.getElementById("scrollButton");
window.onscroll=function(){scrollFunction()};
console.log("hello")
function scrollFunction(){
    if(document.body.scrollTop>50||document.documentElement.scrollTop>50){
scrollButton.style.display="block";
console.log("yes")
    }
    else{
        scrollButton.style.display="none";
    }
    
}
function backTop(){
    document.documentElement.scrollTop=0;
}