/** FOUC PREVENTION
	add this class to the HTML element with JS because it
	has the property display: none; so that non-js enabled
	users can view the page properly */
	
document.documentElement.className = "preload";