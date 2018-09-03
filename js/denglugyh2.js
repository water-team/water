window.onload=function(){
    let telephone=document.getElementById('telephone')
    let vericode=document.getElementById('veri_code')
    let btn=document.querySelector('.btn')
    let code=document.querySelector('.verification .code')
    console.log(telephone,vericode,btn)
    btn.onclick=function(){
        if(telephone.value==15364962298&&veri_code.value==1314250){
            open('denglugyh3.html')
        }
    }
    code.onclick=function(){
        veri_code.value=1314250
    }





}