// Main View of Home Route
var K_HomeView = Backbone.View.extend({
	initialize:function(){
		// define home view main
		var homeMainTemplateStr = '<div id="slide-show"></div><div id="post"></div><div id="blog"></div>';
		// empty main and append home main
		$('#main').empty().append(homeMainTemplateStr);
		console.log('HomeView');	
	}
});