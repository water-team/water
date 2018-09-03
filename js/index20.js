window.onload=function(){
    let btn=document.querySelector("footer .btn");
    let index21=document.querySelector(".Waterway .index_21");
    console.log(btn,index21);
    btn.onclick=function () {
        index21.style.display="block";
    }
    index21.onclick=function(){
        index21.style.display="none";
    }
}