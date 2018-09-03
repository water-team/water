window.onload=function() {
	// 选项卡部分
	let lists = document.querySelectorAll(".nav_list");
	let bigBox = document.querySelectorAll(".bigBox");
	console.log(lists,bigBox);
	
	for (let i = 0; i < lists.length; i++) {
		lists[i].onclick=function (){
		for (let j = 0; j < lists.length; j++) {
			lists[j].classList.remove("ch");
			bigBox[j].style.display="none";
		}
		lists[i].classList.add("ch");
	bigBox[i].style.display="block";
	}
}





}