var SimpleValidator = {};
(function($){
	SimpleValidator.validateForm = function( formId ){
		var formRequired = formId.find('[required]');
		var formSelectors = formId.find('select');
		var errorCount = 0;
		
		for(var i = 0;i < formRequired.length;i++){
			switch(formRequired[i].getAttribute('required')){
				case "email":
					var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
					if(reg.test(formRequired[i].value) == false) {
						formRequired[i].setAttribute('placeholder', '* Valid E-mail Required');
						formRequired[i].value = "";
						formRequired[i].setAttribute('style','border:1px solid red;');
						errorCount++;
					}
				break;
				
				case "integer":
					var reg = new RegExp("^[-]?[0-9]+[\.]?[0-9]+$");
					if (reg.test(formRequired[i].value)){
						//Do Nothing;
					} else {
						errorCount++;
						formRequired[i].setAttribute('placeholder', '* Must Be Number');
						formRequired[i].value = "";
						formRequired[i].setAttribute('style','border:1px solid red;');
					}
				break;
				
				case "password":
					if (formRequired[i].value.length < 6 ){	
							formRequired[i].setAttribute('placeholder', '* Password Must Be At Least 6 Characters');
							formRequired[i].value = "";
							formRequired[i].setAttribute('style','border:1px solid red;');
							errorCount++;
					}
				break;
				
				default:
						if (formRequired[i].type == "select-one"){
							//Highlight must select one.
							var oriBorder = formRequired[i].parentNode.childNodes[0].style.border;
							var oriTextColor = formRequired[i].parentNode.childNodes[0].childNodes[0].style.color;
							if (formRequired[i].value == "null"){
								formRequired[i].parentNode.childNodes[0].style.border = '1px solid red';
								formRequired[i].parentNode.childNodes[0].childNodes[0].style.color = 'red';
								formRequired[i].onchange = function(e){
									e.target.parentNode.childNodes[0].childNodes[0].style.color = '#333333';
									e.target.parentNode.childNodes[0].style.border = '0px solid #909090';
								}
								errorCount++;
							}
							
						} else {
							if (formRequired[i].value == ""){
								formRequired[i].setAttribute('placeholder', '* Required Field');
								formRequired[i].value = "";
								formRequired[i].setAttribute('style','border:1px solid red;');
								errorCount++;
							}
						}
						
						
				break;
			}
		}
		
		if(errorCount){
			return false;
		} else {
			return true;
			
		}
	};
	
	SimpleValidator.doReturnStyle = function(domObj){
		domObj.setAttribute('style','border:1px solid #ccc;');
	};
	
	SimpleValidator.carriageCleaner = function(domObj){
		var tempValue = String(domObj.value);
		domObj.value = tempValue.replace(/^\s+|\s+$/g,"");
	}; 
	
	SimpleValidator.maxLengthCheck = function(domObj, limit){
		domObj.setAttribute('maxLength', 150);
	};
	
	SimpleValidator.formatCurrency = function(domObj){
		console.log(domObj.value);
		/*
		if (domObj.value.indexOf("$") < 0) {
    		domObj.value = "$" + domObj.value;
		}; 
		if (domObj.value.indexOf(".") < 0){
		    domObj.value = (domObj.value + ".00");
		};*/
	};
})(jQuery);
