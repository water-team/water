window.onload=function () {
    let time=document.querySelector(".Waterway .message .one1");
    let index_15=document.querySelector(".Waterway .index_15");
    let footer15_btn=document.querySelector(".Waterway .index_15 .footer15 .footer15_btn")
    // console.log(time,index_15,footer15_btn);
    time.onclick=function () {
        index_15.style.display="block";
    }
    footer15_btn.onclick=function () {
        index_15.style.display="none";
    }
}