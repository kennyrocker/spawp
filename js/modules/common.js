/**
 * @class
 * K_Common is a class that contains common, reuable functions accessible from anywhere.
 */
function common(){
	/*reqire fill valiatior*/
	this.isFilled =function(obj){
	return obj.str !=='';
	};
	/*regular expression validator*/
	this.isValid =function(obj){
		var matchBln = obj.matchBln;
		var str = obj.str;
		var regStr = new RegExp(obj.regStr);
		if(str !==''){
			if(matchBln === false){
				//console.log('false regStr : '+regStr+' || match : '+regStr.test(str));
				if(regStr.test(str)){
				//console.log('0');
					return false;
				}else{
				//	console.log('1');
					return true;
				}
			}else{
				//console.log('else regStr : '+regStr+' || match : '+regStr.test(str));
				if(regStr.test(str)){
				//console.log('0');
					return true;
				}else{
				//console.log('1');
					return false;
				}
			}
		}else{
			return true;
		}
	};
	/*show error message*/
	this.showError=function(obj){
		var id = obj.id;
		var message = obj.message;
		var cls = obj.cls || 'error';
			// grab error span innerText
			var fullErrorStr = $('.'+id+'-'+cls).html();
			// make input text red
			$('#'+id).css('color','red');
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
		var cls = obj.cls || 'error';
			// make reset input text color
			$('#'+id).focus(function(){
				$(this).css('color','black');
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

}
var common = new common();