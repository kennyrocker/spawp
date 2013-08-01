// login View
var K_LoginView = Backbone.View.extend({
	template: Handlebars.compile(
		'<span id="username">USER:</span>'+
		'<input type="text" id="username-input" />'+
		'<span id="password">PASS:</span>'+
		'<input type="text" id="password-input" />'+
		'<button id="loginBtn">Login</button>'
	),
	// Login View use loginModel
	initialize:function(){},
	render:function(){
		this.$el.html(this.template());
		return this;
	}
});