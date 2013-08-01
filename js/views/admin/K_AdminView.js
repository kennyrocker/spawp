// Main View of Admin Route
var K_AdminView = Backbone.View.extend({
	initialize:function(){
		var instance=null;
		// define home view main
		var homeMainTemplateStr = '<div id="login"></div>';
		// empty main and append home main
		$('#main').empty().append(homeMainTemplateStr);
		// load login module
		instance = new K_LoginView();
		$('#login').html(instance.render().el);
	}
});