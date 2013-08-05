// Main View of Home Route
var K_HomeView = Backbone.View.extend({
	tagName:'section',
	id:'K_HomeView',
	template: Handlebars.compile(
		'<div id="slide-show"></div><div id="post"></div><div id="blog"></div>'
	),
	initialize:function(){
		// empty main and append home main
		$('#main').empty().append(this.$el.empty().append(this.template));
	}
});