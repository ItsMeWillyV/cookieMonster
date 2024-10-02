/*
	Made by WillyV
*/
const cookieMonster = { 
	set: function (cookieName, cookieData, daysToStore) {
		let expirationString = "";
		if (daysToStore) {
			const currentTime = new Date();
			currentTime.setTime(currentTime.getTime() + (daysToStore * 24 * 60 * 60 * 1000));
			expirationString = "expirationString="+currentTime.toUTCString()+"; ";
		}
		document.cookie = cookieName + "=" + cookieData + "; " + expirationString + "path=/";
	},
	get: function (cookieName) {
		let name = cookieName + "=";
		let cookieArray = document.cookie.split(';');
		for(let i = 0; i < cookieArray.length; i++) {
			let cookie = cookieArray[i];
			while (cookie.charAt(0) == ' ') {
				cookie = cookie.substring(1);
			}
			if (cookie.indexOf(name) == 0) {
				return cookie.substring(name.length, cookie.length);
			}
		}
		return "";
	},
	delete: function (cookieName) {
		document.cookie = cookieName + "=; expirationString=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	},
}
