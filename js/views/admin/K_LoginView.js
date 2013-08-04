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
		if(common.isFilled({str:userNameStr})){
			common.killError({id:'username-input',message:'username required'});
		}else{
		 	common.showError({id:'username-input',message:'username required'});
		}
		if(common.isFilled({str:passWordStr})){
			common.killError({id:'password-input',message:'password required'});
		}else{
			common.showError({id:'password-input',message:'password required'});
		}
		
		//console.log("view name with script regx "+common.isValid({str:userNameStr,matchBln:false,regStr:'<script>'}));
		//console.log("view pass with script regx "+common.isValid({str:passWordStr,matchBln:false,regStr:'<script>'}));
		
		if(common.isValid({str:userNameStr,matchBln:false,regStr:'<script>'})){
			common.killError({id:'username-input',message:'no script allow'});
		}else{
			common.showError({id:'username-input',message:'no script allow'});
		}
		if(common.isValid({str:passWordStr,matchBln:false,regStr:'<script>'})){
			common.killError({id:'password-input',message:'no script allow'});
		}else{
			common.showError({id:'password-input',message:'no script allow'});
		}
		
		//console.log("view name with char regx "+common.isValid({str:userNameStr,regStr:'[a-z]'}));
		//console.log("view pass with num regx "+common.isValid({str:passWordStr,regStr:'[0-9]'}));
		
		if(common.isValid({str:userNameStr,regStr:'[a-z]'})){
			common.killError({id:'username-input',message:'no number allow'});
		}else{
			common.showError({id:'username-input',message:'no number allow'});
		}
		if(common.isValid({str:passWordStr,regStr:'[0-9]'})){
			common.killError({id:'password-input',message:'no character allow'});
		}else{
			common.showError({id:'password-input',message:'no character allow'});
		}
		
	}
});