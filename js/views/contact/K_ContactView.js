// Main View of Contact Route
var K_ContactView = Backbone.View.extend({
	tagName:'section',
	id:'K_ContactView',
	template: Handlebars.compile(
		'<div id="business"></div><div id="form"></div><div id="social"></div>'
	),
	initialize:function(){
		// empty main and append home main
		$('#main').empty().append(this.$el.empty().append(this.template));
	}
});