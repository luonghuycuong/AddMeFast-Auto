function likePrepare(){
	var btnAjax = document.getElementsByClassName('single_like_button');
	
	if(btnAjax.length){
		btnAjax = btnAjax[0];
		btnAjax.dispatchEvent(new Event('click'));
	}
}

function ajaxLoad(){
	var responseText = this.responseText;
	console.log(responseText);
	if(responseText.indexOf('points added to your balance') > -1){
		setTimeout(likePrepare, 1500);
	}
}

var setRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
XMLHttpRequest.prototype.setRequestHeader = function(){
	this.onload = this.onload ? this.onload : ajaxLoad;
	setRequestHeader.apply(this, arguments);
}