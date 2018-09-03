window.onload = function(){

let annius = document.querySelectorAll("main .anniu button");
let quanBoxs = document.querySelectorAll("main .mainBox .quanBox")
console.log(annius,quanBoxs)
	annius.forEach((item,index)=>{
		item.onclick = function(){
			for(let i=0;i<annius.length;i++){
				annius[i].classList.remove("active");
				quanBoxs[i].classList.remove("active");
			}
			item.classList.add("active");
			quanBoxs[index].classList.add("active");
		}
	})














}