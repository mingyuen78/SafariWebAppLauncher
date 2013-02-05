var PageControl = {};

(function(){
	PageControl.convertXML = function(){
		$("#sourceXML").val ( $.trim($("#sourceXML").val()) );
		var xmlManifestFileContent =  $("#sourceXML").val( );
		console.log( xmlManifestFileContent );
		var xmlStringArray = xmlManifestFileContent.split("\n");
		xmlStringArray.splice(7,0,'    <supports-screens android:largeScreens="true" android:normalScreens="true" android:smallScreens="true" android:resizeable="true" android:anyDensity="true"/>');
		xmlStringArray.splice(8,0,'    <uses-permission android:name="android.permission.CAMERA" />');
		xmlStringArray.splice(9,0,'    <uses-permission android:name="android.permission.VIBRATE" />');
		xmlStringArray.splice(10,0,'    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />');
		xmlStringArray.splice(11,0,'    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />');
		xmlStringArray.splice(12,0,'    <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />');
		xmlStringArray.splice(13,0,'    <uses-permission android:name="android.permission.READ_PHONE_STATE" />');
		xmlStringArray.splice(14,0,'    <uses-permission android:name="android.permission.INTERNET" />');
		xmlStringArray.splice(15,0,'    <uses-permission android:name="android.permission.RECEIVE_SMS" />');
		xmlStringArray.splice(16,0,'    <uses-permission android:name="android.permission.RECORD_AUDIO" />');
		xmlStringArray.splice(17,0,'    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />');
		xmlStringArray.splice(18,0,'    <uses-permission android:name="android.permission.READ_CONTACTS" />');
		xmlStringArray.splice(19,0,'    <uses-permission android:name="android.permission.WRITE_CONTACTS" />');
		xmlStringArray.splice(20,0,'    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />');
		xmlStringArray.splice(21,0,'    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />');
		xmlStringArray.splice(22,0,'    <uses-permission android:name="android.permission.GET_ACCOUNTS" />');
		xmlStringArray.splice(23,0,'    <uses-permission android:name="android.permission.BROADCAST_STICKY" />');
		xmlStringArray[30] = '            android:label="@string/app_name" android:configChanges="orientation|keyboardHidden" >';
		xmlStringArray.splice(37,0,'        <activity android:name="com.phonegap.DroidGap" android:label="@string/app_name" android:configChanges="orientation|keyboardHidden">');
		xmlStringArray.splice(38,0,'              <intent-filter> </intent-filter>');
		xmlStringArray.splice(39,0,'        </activity>');
		PageControl.writeBackXML( xmlStringArray );
	}
	
	PageControl.writeBackXML = function(array){
		var constructedNewString = "";
		for(var i = 0; i < array.length; i++ ){
			constructedNewString += array[i] + "\n";
		}
		$("#sourceXML").val ( constructedNewString );
	}
	
	PageControl.goURL = function(url){
		$.mobile.changePage(url);
	}
	
	PageControl.goRef = function(){
		var settings = AppGlobalData.getLocalSettings();
		//console.log(settings.defaultref);
		window.open(unescape(settings.defaultref));
	}
	
	PageControl.validateForm = function(domObj){
		PageControl.saveSettings(SimpleValidator.validateForm(domObj));
	}
	
	PageControl.saveSettings = function(bOK){
	 	if(bOK){
			var NEWSETTINGS = {
				defaultlaunch:escape($('#filelocation').val()),
				defaultref:escape($('#reflocation').val()),
				defaultwidth:$('#width').val(),
				defaultheight:$('#height').val()
			}
			AppGlobalData.setLocalSettings(NEWSETTINGS);
			PageControl.goURL('launchme.html');
		}
	}
	
	PageControl.renderValue = function(domObj){
		var SETTINGSDATA = AppGlobalData.getLocalSettings();
		PageValueRenderer.renderForm(domObj,SETTINGSDATA);
	}
	
	PageControl.launchDefault = function(url){
		var SETTINGSDATA = AppGlobalData.getLocalSettings();
		PageControl.launcher(unescape(SETTINGSDATA.defaultlaunch),SETTINGSDATA.defaultwidth,SETTINGSDATA.defaultheight);
	}
	
	PageControl.launchValue = function(width,height){
		var SETTINGSDATA = AppGlobalData.getLocalSettings();
			PageControl.launcher(unescape(SETTINGSDATA.defaultlaunch),width,height);
	}
	
	PageControl.launcher = function(url,width,height){
		var width = parseInt(width)+15;
		var height = parseInt(height)+15;
		window.open(unescape(url), "myApp","location=0,status=0,scrollbars=1,width="+(width)+",height="+(height));
	}
})();