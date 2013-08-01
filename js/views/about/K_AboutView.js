// Main View of About Route
var K_AboutView = Backbone.View.extend({
	initialize:function(){
		// define home view main
		var homeMainTemplateStr = '<div id="bio"></div><div id="skill"></div><div id="work"></div><div id="education"></div>';
		// empty main and append home main
		$('#main').empty().append(homeMainTemplateStr);
		console.log('AboutView');	
	}

});