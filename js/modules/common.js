/**
 * @class
 * K_Common is a class that contains common, reuable functions accessible from anywhere.
 */
function common(){
	var self = this;
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
				console.log('validateBln in validate 1'+validateBln);
			}
		}
		console.log('validateBln in validate 2'+validateBln);
		return validateBln;
	};
	/*validate each field*/
	this.validateField=function(obj){
		//console.log(obj);
		var validateBln = false;
		var errorNum = 0;
		var valueStr = $('#'+obj.id).val();
			//if require field
			if(obj.requireBln===true){
				var errorObj = {id:obj.id,hex:obj.standerHex,message:obj.requireMessageStr};
				if(self.isFilled({str:valueStr})){
					self.killError(errorObj);
					//validateBln = true;
					console.log('vf rf -1');
					errorNum --;
				}else{
					errorObj.hex = obj.errorHex;
					self.showError(errorObj);
					//validateBln = false;
					console.log('vf rf +1');
					errorNum ++;
				}
			}
			//if no script allow
			if(obj.noScriptBln===true){
				var errorObj = {id:obj.id,hex:obj.standerHex,message:'No script allow!!'};
				if(self.isValid({str:valueStr,matchBln:false,regStr:'<script>'})){
					self.killError(errorObj);
					//validateBln = true;
					console.log('vf ns -1');
					errorNum --;
				}else{
					errorObj.hex = obj.errorHex;
					self.showError(errorObj);
					//validateBln = false;
					console.log('vf ns +1');
					errorNum ++;
				}
			}
			//if regular expressions
		console.log('errorNum --> '+errorNum);
		return validateBln;
	};

}
var common = new common();