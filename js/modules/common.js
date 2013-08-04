/**
 * @class
 * K_Common is a class that contains common, reuable functions accessible from anywhere.
 */
function common(){
	/*reqire fill valiatior*/
	this.isFilled =function(obj){
	return obj.Str ==='';
	};
	/*regular expression validator*/
	this.isValid =function(obj){
		var bln = false;
		var str = obj.Str;
		var regStr = obj.regStr;
		console.log(regStr.test(str));
	};
	/*show error message*/
	this.showError=function(obj){
		var id = obj.id;
		var message = obj.message;
		var cls = obj.cls || 'error';
		console.log(id,message,cls);
		// make error input red
		$('#'+id).css('color','red');
		// fade in error message at error span
		$('.'+id+'-'+cls).append(message+' ');
	};
	/*kill error message*/
	this.killError=function(obj){

	};

}
var common = new common();