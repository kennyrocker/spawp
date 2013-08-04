// login View
var K_LoginView = Backbone.View.extend({
	template: Handlebars.compile(
		'<span id="username">USER:</span>'+
		'<input type="text" id="username-input" />'+
		'<span class="username-input-error"></span>'+
		'<span id="password">PASS:</span>'+
		'<input type="text" id="password-input" />'+
		'<span class="password-input-error"></span>'+
		'<button id="loginBtn">Login</button>'
	),
	// Login View use loginModel
	initialize:function(){

	},
	render:function(){
		//console.log("lgoinView.render", this.outerHTML);
		this.$el.html(this.template());
		this.delegateEvents({
			'click #loginBtn' : 'loginFnc'
		});
		return this;
	},
	loginFnc:function(){
		var vBln = false;
		//get user name
		var userNameStr = $('#username-input').val();
		//get pass word
		var passWordStr = $('#password-input').val();
		//validation
		//vBln = common.rfv({Str:userNameStr});
		if(common.isFilled({Str:userNameStr})){
			// show error message
			//console.log('username needed');
			common.showError({id:'username-input',message:'username required'});
		}
		if(common.isFilled({Str:passWordStr})){
			// show error message
			//console.log('pass needed');
			common.showError({});
		}
		//call login
			//console.log("login btn clicked"+this.cid);
		//});
	}
});