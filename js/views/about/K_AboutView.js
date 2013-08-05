// Main View of About Route
var K_AboutView = Backbone.View.extend({
	tagName:'section',
	id:'K_AboutView',
	template: Handlebars.compile(
		'<div id="bio"></div><div id="skill"></div><div id="work"></div><div id="education"></div>'
	),
	initialize:function(){
		//empty main and append home main
		$('#main').empty().append(this.$el.empty().append(this.template));
	}
});