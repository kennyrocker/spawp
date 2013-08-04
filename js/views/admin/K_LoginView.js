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
		//get user name
		//var userNameStr = $('#username-input').val();
		//get pass word
		//var passWordStr = $('#password-input').val();
		// prep valdation object
		var valiObj = {
			fields:[
				{	
					id:'username-input',
					requireBln:true,
					requireMessageStr:'username required',
					regExp:'[a-Z]',
					regExpMessageStr:'no number allow',
					noScriptBln:true
				},
				{
					id:'password-input',
					requireBln:true,
					requireMessageStr:'password required',
					regExp:'[0-9]',
					regExpMessageStr:'no character allow',
					noScriptBln:true
				}
			],
			standerHex:'#000',
			errorHex:'red'
		};
		//call validation
		loginBln = this.validate(valiObj);
		console.log("FINAL loginBln => "+loginBln);
		//validation
		/*
		if(common.isFilled({str:userNameStr})){
			common.killError({id:'username-input',hex:'#000',message:'username required'});
		}else{
		 	common.showError({id:'username-input',hex:'red',message:'username required'});
		}
		if(common.isFilled({str:passWordStr})){
			common.killError({id:'password-input',hex:'#000',message:'password required'});
		}else{
			common.showError({id:'password-input',hex:'red',message:'password required'});
		}

		if(common.isValid({str:userNameStr,matchBln:false,regStr:'<script>'})){
			common.killError({id:'username-input',hex:'#000',message:'no script allow'});
		}else{
			common.showError({id:'username-input',hex:'red',message:'no script allow'});
		}
		if(common.isValid({str:passWordStr,matchBln:false,regStr:'<script>'})){
			common.killError({id:'password-input',hex:'#000',message:'no script allow'});
		}else{
			common.showError({id:'password-input',hex:'red',message:'no script allow'});
		}

		if(common.isValid({str:userNameStr,regStr:'[a-z]'})){
			common.killError({id:'username-input',hex:'#000',message:'no number allow'});
		}else{
			common.showError({id:'username-input',hex:'red',message:'no number allow'});
		}
		if(common.isValid({str:passWordStr,regStr:'[0-9]'})){
			common.killError({id:'password-input',hex:'#000',message:'no character allow'});
		}else{
			common.showError({id:'password-input',hex:'red',message:'no character allow'});
		}
		*/
	},
	validate:function(obj){
		var vBln = common.validate(obj);
		console.log('validate vBln => '+vBln);
		return vBln;
	}
});