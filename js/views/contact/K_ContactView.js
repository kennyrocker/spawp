// Main View of Contact Route
var K_ContactView = Backbone.View.extend({
	initialize:function(){
		// define home view main
		var homeMainTemplateStr = '<div id="business"></div><div id="form"></div><div id="social"></div>';
		// empty main and append home main
		$('#main').empty().append(homeMainTemplateStr);
		console.log('ContactView');	
	}

});