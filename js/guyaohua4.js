window.onload=function(){
    let icons=document.querySelector('.search .search_box i')
    let name=document.getElementById('name')
    console.log(icons,name)
    icons.onclick=function(){
        if(name.value=="太原"){
            open("guyaohua7.html")
        }
        else{
            open("guyaohua5.html")
        }
    }
}