var AppGlobalData = {};
(function(){
	var DEFAULTDATA = {
		defaultlaunch:'index.html',
		defaultref:'http://jquerymobile.com/demos/1.1.0/',
		defaultwidth:320,
		defaultheight:480
	}
	
	AppGlobalData.init = function(){
		if (AppGlobalData.getLocalSettings() == null){
			// No settings at all, pump defaults;
			AppGlobalData.setLocalSettings(DEFAULTDATA);
		} else {
			//Do nothing
		}
	}
	
	AppGlobalData.getLocalSettings = function(){
		return localStorage.getObject("SETTINGS");
	}
	
	AppGlobalData.setLocalSettings = function(value){
		return localStorage.setObject("SETTINGS",value);
	}
})();