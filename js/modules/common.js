/**
 * @class
 * K_Common is a class that contains common, reuable functions accessible from anywhere.
 */
function common(){
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
				$('.'+id+'-'+cls).fadeIn('slow');
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
			$('.'+id+'-'+cls).fadeIn('slow');

	};

	/*anonomus error counter*/
	/*
	function errorCount(){
		errorNum = 0;
		this.plus = function(){
			errorNum++;
			console.log('ERROR COUNT PLUS EM '+errorNum);
			return errorNum;
		};
		this.remove =function(){
			errorNum--;
			console.log('ERROR COUNT REMOVE EM '+errorNum);
			return errorNum;
		};
		console.log('ERROR COUNT EM '+errorNum);
		return errorNum;
	}
	*/
	/*call multipule validation methods and return a bln*/
	this.validate=function(obj){
		// define global validate bln as false
		var validateBln = false;
		var fields = obj.fields;
		// if fields count more than 0
		if(fields.length > 0){
			for(var i=0; i<fields.length; i++){
				// prep each field obj
				var fieldObj = fields[i];
					fieldObj.standerHex = obj.standerHex;
					fieldObj.errorHex = obj.errorHex;
				// call validate each field
				validateBln = this.validateField(fieldObj);	
				console.log('x--------------------------x');
				//console.log('validateBln in validate 1'+validateBln);
			}
		}
		//console.log('validateBln in validate 2'+validateBln);
		return validateBln;
	};

	

	/*validate each field*/
	this.validateField=function(obj){
		console.log('validateField being call one time');
		var validateBln = false;
		//var errorNum = 0;
		
		var rfBln = false;
		var nsBln = false;
		var rgBln = false;
		
		//console.log('validateField start '+errorNum);
		var valueStr = $('#'+obj.id).val();
			//if require field
			if(obj.requireBln===true){
				//console.log('rf start '+errorNum);
				var errorObj = {id:obj.id,hex:obj.standerHex,message:obj.requireMessageStr};
				if(self.isFilled({str:valueStr})){
					self.killError(errorObj);
					rfBln = true;
					//errorNum = errorNum - 1;
					//console.log('vf rf -true ' +errorNum);
				}else{
					errorObj.hex = obj.errorHex;
					self.showError(errorObj);
					rfBln = false;				
					//errorNum = errorNum + 1;
					//errorNum.plus();
					//console.log('vf rf +false '+errorNum);
				}
				//console.log('rf end '+errorNum);
				console.log('rfBln after isFilled Test '+rfBln);
			}
			//if no script allow
			if(obj.noScriptBln===true){
				//console.log('vf start '+errorNum);
				var errorObj = {id:obj.id,hex:obj.standerHex,message:'No script allow!!'};
				if(self.isValid({str:valueStr,matchBln:false,regStr:'<script>'})){
					self.killError(errorObj);
					nsBln = true;
					//errorNum = errorNum -1;
					//errorNum.remove();
					//console.log('vf ns -false '+errorNum);
				}else{
					errorObj.hex = obj.errorHex;
					self.showError(errorObj);
					nsBln = false;
					//errorNum = errorNum + 1;
					//errorNum.plus();
					//console.log('vf ns +true '+errorNum);
				}
				//console.log('vf end '+errorNum);
				console.log('nsBln after isValid Test '+rfBln);
			}
			//if regular expressions
		//console.log('validateField end --> '+errorNum);

		console.log('rfBln after All '+rfBln);
		console.log('nsBln after All '+nsBln);
		return validateBln;
	};
}
// initilize common namespace
var common = new common();