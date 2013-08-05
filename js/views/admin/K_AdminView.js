// Main View of Admin Route
var K_AdminView = Backbone.View.extend({
	initialize:function(){
		var instance=null;
		// define home view main
		var homeMainTemplateStr = '<div id="Admin"></div>';
		// empty main and append home main
		$('#main').empty().append(homeMainTemplateStr);
		// load login module
		instance = new K_LoginView();
		$('#Admin').html(instance.render().el);
		//instance.events();
		//console.log(this.model);
	}
});