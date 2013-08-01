// Main View of Portfolio Route
var K_PortfolioView = Backbone.View.extend({
	initialize:function(){
		// define home view main
		var homeMainTemplateStr = '<div id="filter"></div><div id="wall"></div>';
		// empty main and append home main
		$('#main').empty().append(homeMainTemplateStr);
		console.log('PortfolioView');	
	}

});