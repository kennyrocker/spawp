// Main View of Portfolio Route
var K_PortfolioView = Backbone.View.extend({
	tagName:'section',
	id:'K_PortfolioView',
	template: Handlebars.compile(
		'<div id="filter"></div><div id="wall"></div>'
	),
	initialize:function(){
		// empty main and append home main
		$('#main').empty().append(this.$el.empty().append(this.template));
	}
});