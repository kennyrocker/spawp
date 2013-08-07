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
	tagName:'section',
	className:'K_LoginView',
	// Login View use loginModel
	initialize:function(){
		this.model = APP.LOGINMODEL;
		console.log('K_LoginView init ',this.model);
	},
	render:function(){
		//console.log("lgoinView.render", this.outerHTML);
		// empty el first then appen templatle to avoid event zombie
		this.$el.empty().append(this.template());
		this.delegateEvents({
			'click #loginBtn' : 'loginClicked'
		});
		return this;
	},
	loginClicked:function(){
		var loginBln = false;
		// prep valdation object
		var valiObj = {
			fields:[
				{
					id:'username-input',
					requireBln:true,
					requireMessageStr:'username required'
				},
				{
					id:'password-input',
					requireBln:true,
					requireMessageStr:'password required'
				}
			],
			standerHex:'#000',
			errorHex:'red'
		};
		//call validation
		loginBln = this.validate(valiObj);
		if(loginBln) this.postLogin();
	},
	validate:function(obj){
		var vBln = common.validate(obj);
		return vBln;
	},
	postLogin:function(){
		var userNameStr = $('#username-input').val();
		var passWordStr = $('#password-input').val();
		console.log('post to backend with ==> '+userNameStr+' // '+passWordStr);
	}
});