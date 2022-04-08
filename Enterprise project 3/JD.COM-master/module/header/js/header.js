var dropdowns = document.getElementsByClassName('dropdown');

for (var i = 0; i < dropdowns.length; i++) {
	dropdowns[i].onmouseover = function(event) {
		addClass(this,'dropdown_hover');
	};
	dropdowns[i].onmouseout = function(event) {
		removeClass(this,'dropdown_hover');
	};
}

function hasClass( elements,cName ){ 
	return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
}
function addClass( elements,cName ){ 
	if( !hasClass( elements,cName ) ){ 
		elements.className += " " + cName; 
	}
}
function removeClass( elements,cName ){ 
	if( hasClass( elements,cName ) ){ 
		elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); // replace方法是替换 
	}
}