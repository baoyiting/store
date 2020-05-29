function slide_photos(){
	var photos = document.getElementById("photos");
    var pli = photos.getElementsByTagName("li");
 
	var left = photos.offsetLeft;    //图片距离显示框的左边距
    var width = pli[0].offsetWidth;    //一张图片的宽度
    var lis = pli.length;    //图片列表长度
 
    //如果图片距离显示框边距大于图片总长度-1，则重新设置位置， 否则递增；
	if(-left>= (lis-1)*width){
		photos.style.left= 0+ "px";
		
	}else{
		left-= width;	
		photos.style.left= left+ "px";
	}
}
//验证输入密码和再次输入密码是否一致
// window.onload = function(){
// 	var pass = document.getElementById("pass");
// 	var secondpass = document.getElementById("secondpass");
// 	secondpass.addEventListener("keydown",function(e){
// 	if(e.keyCode == "13"){
// 		if pass.value == secondpass.value{
// 			alert("密码一致")
// 		}else{
// 			alert("密码不一致 请重新输入")
// 		}
// 		}
// 	})
// }
 
//设置重新加载时间，2000毫秒
window.setInterval("slide_photos()",3000);

 //设置一个全局的变量，便于保存验证码
var code;
function createCode(){
    code = '';
    var codeLength = 4;
    var codeV = document.getElementById('code');
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
    //循环codeLength 我设置的4就是循环4次
    for(var i = 0; i < codeLength; i++){
    //设置随机数范围,这设置为0 ~ 36
    var index = Math.floor(Math.random()*36);
    //字符串拼接 将每次随机的字符 进行拼接
    code += random[index]; 
    }
    //将拼接好的字符串赋值给展示的Value
    codeV.value = code;
}

//下面就是判断是否== 的代码，无需解释
function validate(){
    var oValue = document.getElementById('input').value.toUpperCase();
    if(oValue ==0){
        alert('请输入验证码');
    }else if(oValue != code){
    alert('验证码不正确，请重新输入');
        oValue = ' ';
        createCode();
    }else{
        alert('验证码通过');
    }
}
    //设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
window.onload = function (){
    createCode();
}