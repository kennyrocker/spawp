// Main View of Admin Route
var K_AdminView = Backbone.View.extend({
	// define home view main
	id:'K_AdminView',
	initialize:function(){
		var instance=null;
		// load login module
		instance = new K_LoginView();
		// empty main and append home main
		$('#main').empty().append(this.$el.empty().append(instance.render().el));
	}
});