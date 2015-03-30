function injectScript(script) {
    var body = document.getElementsByTagName('body')[0];
    var s = document.createElement('script');
    
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', script);
    
    body.appendChild(s);
}

document.addEventListener('DOMContentLoaded', function(){
	
	if(window.location.href == 'http://addmefast.com/free_points/facebook_likes'){
		injectScript(chrome.extension.getURL('/js/content-addmefast.js'));
		
	} else if(window.location.href.indexOf('https://www.facebook.com/') == 0) {
		injectScript(chrome.extension.getURL('/js/content-facebook.js'));
	}
});