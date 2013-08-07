/**
 * @class
 * K_Common is a class that contains common, reuable functions accessible from anywhere.
 */
function common(){
	// scope alias
	var self = this;
	/*-----------------------------------------------------*/
	/*----------------- Validation Methods ----------------*/
	/*-----------------------------------------------------*/
	/*reqire fill valiatior*/
	this.isFilled =function(obj){
		return obj.str !=='';
	};
	/*regular expression validator*/
	this.isValid =function(obj){
		var matchBln = obj.matchBln;
		var str = obj.str;
		var regStr = new RegExp(obj.regStr);
		if(str !==''){	// if str is not empty
			if(matchBln === false){	// if set to NOT match the RegExp
				var nmBln = regStr.test(str) ? false : true;
				return nmBln;
			}else{	// if set to match the RegExp
				var mBln = regStr.test(str) ? true : false;
				return mBln;
			}
		}else{	// if str is empty
			return true;
		}
	};
	/*show error message*/
	this.showError=function(obj){
		var id = obj.id;
		var message = obj.message;
		var hex = obj.hex;
		var cls = obj.cls || 'error';
			// grab error span innerText
			var fullErrorStr = $('.'+id+'-'+cls).html();
			// make input text red
			$('#'+id).css('color',hex);
			// check if message is not within innerText
			if((fullErrorStr).indexOf(message)!= -1){
				// if message already exsited, do nothing
			}else{
				// hide error span
				$('.'+id+'-'+cls).hide();
				// add message to error span
				$('.'+id+'-'+cls).append(message+' ');
				// fade in error span
				$('.'+id+'-'+cls).fadeIn();
			}
	};
	/*kill error message*/
	this.killError=function(obj){
		var id = obj.id;
		var message = obj.message;
		var hex = obj.hex;
		var cls = obj.cls || 'error';
			// make reset input text color
			$('#'+id).focus(function(){
				$(this).css('color',hex);
			});
			// grab error span innerText
			var fullErrorStr = $('.'+id+'-'+cls).html();
			// cut out message
			fullErrorStr = fullErrorStr.replace(message+' ', '');
			// hide error span
			$('.'+id+'-'+cls).hide();
			// rewrite span innerText
			$('.'+id+'-'+cls).html(fullErrorStr);
			// fade in error span
			$('.'+id+'-'+cls).fadeIn();
	};
	/*-----EXPECING OJECT---- 
	 *	{	
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
		}		
	 *call multipule validation methods and return a bln*/
	this.validate=function(obj){
		// define global validate bln as false
		var validateBln = false;
		var valiteCountNum = 0;
		var fields = obj.fields;
		// if fields count more than 0
		if(fields.length > 0){
			for(var i=0; i<fields.length; i++){
				// prep each field obj
				var fieldObj = fields[i];
					fieldObj.standerHex = obj.standerHex;
					fieldObj.errorHex = obj.errorHex;
				// call validate each field
				var tmpBln = self.validateField(fieldObj);
				if(tmpBln === true) valiteCountNum++;
			}
		}
		//if valiteCountNum equal to amout of fileds set validateBln to ture
		if(valiteCountNum == fields.length) validateBln = true;
		return validateBln;
	};
	/*validate each field*/
	this.validateField=function(obj){
		// define global validation bln
		var validateBln = false;
		// define check blns
		var rfBln = false;
		var nsBln = false;
		var rgBln = false;
		// get value by id
		var valueStr = $('#'+obj.id).val();
			// no script check by defalut
			var erObj = {id:obj.id,hex:obj.standerHex,message:'No script allow!!'};
			if(self.isValid({str:valueStr,matchBln:false,regStr:'<script>'})){
				self.killError(erObj);
				nsBln = true;
			}else{
				erObj.hex = obj.errorHex;
				self.showError(erObj);
				nsBln = false;
			}
			//if require field check
			if(obj.requireBln===true){
				var errorObj = {id:obj.id,hex:obj.standerHex,message:obj.requireMessageStr};
				if(self.isFilled({str:valueStr})){
					self.killError(errorObj);
					rfBln = true;
				}else{
					errorObj.hex = obj.errorHex;
					self.showError(errorObj);
					rfBln = false;
				}
			}
			//if regular expressions check
			if(obj.regExp!==undefined && obj.regExpMessageStr!==undefined){
				//console.log('regExp Check');
				var eObj = {id:obj.id,hex:obj.standerHex,message:obj.regExpMessageStr};
				if(self.isValid({str:valueStr,regStr:obj.regExp})){
					self.killError(eObj);
					rgBln = true;
				}else{
					eObj.hex = obj.errorHex;
					self.showError(eObj);
					rgBln = false;
				}
			}
		//determind validateBln base on obj
			// all condition check
			if(obj.requireBln===true && obj.regExp!==undefined){
				if(rfBln===true && rgBln===true && nsBln===true) validateBln = true;
			}
			// require field check only
			else{
				if(rfBln===true && nsBln===true) validateBln = true;
			}
		return validateBln;
	};
}
// initilize common namespace
var common = new common();