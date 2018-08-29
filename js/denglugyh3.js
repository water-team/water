window.onload=function(){
    let telephones=document.getElementById('telephones')
    let veri=document.getElementById('veri')
    let pass=document.getElementById('pass')
    let word=document.getElementById('word')
    let btn=document.querySelector('.btn')
    let code=document.querySelector('.code')
    console.log(telephones,veri,pass,word,btn)
    btn.onclick=function(){
        if(telephones.value==15364962298&&veri.value==1314250&&pass.value==1105986345&&word.value==1105986345){
            open('denglugyh4.html')
        }
    }
    code.onclick=function(){
        veri.value=1314250
    }



}