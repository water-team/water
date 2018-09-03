window.onload=function () {
    let comprehensive=document.querySelectorAll(".Waterway .nav1 li");
    let comprehensive_D=document.querySelectorAll(".comprehensive_D");
    console.log(comprehensive, comprehensive_D);
    for (let i=0; i<comprehensive.length;i++) {
    comprehensive[i].onclick=function(){
        for (let i=0; i<comprehensive.length;i++) {
            comprehensive_D[i].style.display="none";
        }
        comprehensive_D[i].style.display="block";
        }
        comprehensive_D[i].onclick=function(){
            comprehensive_D[i].style.display="none";
        }
    }


}