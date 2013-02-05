var PageValueRenderer = {};

(function(){
	PageValueRenderer.renderForm = function (domObj, loadedData){
		console.log(JSON.stringify(loadedData));
		var results = domObj.find('input');
		for(var i = 0;i < results.length;i++){
			if (loadedData[results[i].value.substring(2,results[i].value.length)] != undefined ){
				results[i].value =  unescape(loadedData[results[i].value.substring(2,results[i].value.length)]);
			} else {
				results[i].value = "";
			}		
		}
		
		var textareas = domObj.find('textarea');
		for(var i = 0;i < textareas.length;i++){
			if (loadedData[textareas[i].innerHTML.substring(2,textareas[i].innerHTML.length)] != undefined ){
				textareas[i].innerHTML = loadedData[textareas[i].innerHTML.substring(2,textareas[i].innerHTML.length)];
			} else {
				textareas[i].innerHTML = "";
			}		
		}
		loadedData = null;
	}
})();