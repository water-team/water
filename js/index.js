window.onload=function(){
    let banner=document.querySelector('.banner')
    let banner_img=document.querySelectorAll('.banner img')
    let point=document.querySelectorAll('.banner .point')
    console.log(banner,banner_img,point)
    let num=0;
    let t=setInterval(move,1500)
    function move(){
        num++;
        if(num==banner_img.length){
            num=0;
        }
        for(let i=0;i<banner_img.length;i++){
            banner_img[i].style.zIndex='5';
            point[i].classList.remove('point_hot')
        }
        banner_img[num].style.zIndex='10';
        point[num].classList.add('point_hot')
    }
    banner.onmouseenter=function(){
        clearInterval(t)
    }
    banner.onmouseleave=function(){
        t=setInterval(move,1500)
    }
    point.forEach(function(value,i){
        value.onclick=function(){
            for(let j=0;j<point.length;j++){
                banner_img[j].style.zIndex='5';
                point[j].classList.remove('point_hot')
            }
            banner_img[i].style.zIndex='10';
            point[i].classList.add('point_hot')
            clearInterval(t);
        }
    })
    point.onmouseleave=function(){
        t=setInterval(move,1500)
    }










}