var tabs = document.getElementById("tabs").getElementsByTagName("li")
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul")
console.log(lists);
for(var i = 0 ; i <tabs.length;i++){
	// 给每一个li绑定点击事件
	tabs[i].onclick = showlist;
}



function showlist(){
	for(var i = 0 ; i <tabs.length;i++){
		// 如果这个li被点击 class赋值 否则为空
		if(tabs[i] === this){
			tabs[i].className = "active";
			lists[i].className = "check active";
		}
		else{
			tabs[i].className = "";	
			lists[i].className = "check";
		}
	}
}

// 使导航栏固定
var classifyNav = document.getElementById("classifyNav");
window.onscroll = function(){
	// 注意浏览器的兼容性
	var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
	// 大于170就固定在页面上方 小于170就跟着页面一起
	if(scrollTop >= 170){
		classifyNav.className = "classify-nav classify-navfixed";
	}else{
		classifyNav.className = "classify-nav"
	}
}
// function s1{
// 	document.getElementById("conf1").style.color="green";
// }