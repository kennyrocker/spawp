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
		var loginBln = false;
		// prep valdation object
		var valiObj = {
			fields:[
				{
					id:'username-input',
					requireBln:true,
					requireMessageStr:'username required'
					//regExp:'[a-z]',
					//regExpMessageStr:'no number allow'
				},
				{
					id:'password-input',
					requireBln:true,
					requireMessageStr:'password required'
					//regExp:'[0-9]',
					//regExpMessageStr:'no character allow'
				}
			],
			standerHex:'#000',
			errorHex:'red'
		};
		//call validation
		loginBln = this.validate(valiObj);
		if(loginBln) console.log('do login');
	},
	validate:function(obj){
		var vBln = common.validate(obj);
		return vBln;
	}
});