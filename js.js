var check = 2;
// var firstNumbers = [0];
// var secondNumbers = [];

//string variable to store the equation
var str = '';

// var opO = '';
// var checker = 'first';

//this variable use jquery to  refrance to the display element
var dis = $('#display-opration')


//$('#img').hide()

//use jquery to listen to any click from any button,
//and it add our equation to str;
//and display it on the display element;
$('.btns').on('click', function(event){
	if($(event.target).hasClass('num-btn')){
		if(check == 1){
			str = '';
		}
	}
	check = 2;
	//if (checker === 'first') {

		str += $(event.target).val();
 		//firstNumbers.push($(event.target).val())
 		dis.text(str)

 	//}else if (checker === 'second'){
		// str += $(event.target).val();
 		// //secondNumbers.push($(event.target).val())
		// dis.text(str)

 	//}
})

// $('.op-btn').on('click', function(event){
// 	str += $(event.target).val();
// 	//console.log(str)
// 	//opO = $(event.target).val();
// 	//checker = 'second'
// 	dis.text(str)

// })

//function equal(firstNumbers, opO, secondNumbers){
	// console.log(firstNumbers)
	// var firstNumber = parseFloat(firstNumbers.join(''));
	// console.log(firstNumber)
	// var secondNumber = parseFloat(secondNumbers.join(''));
	// var result = 0;

	// switch(opO){
	// 	case '+': 
	// 	result = firstNumber + secondNumber;
	// 		break;
	// 	case '-': 
	// 	result = firstNumber - secondNumber;
	// 		break;
	// 	case '*': 
	// 	result = firstNumber * secondNumber;
	// 		break;
	// 	case '/': 
	// 	if (secondNumber === 0) {
			// console.log("we don't do that here");
			// $('#img').show();
			// $('#calc').hide()

	// 	}else {
	// 		result = firstNumber / secondNumber;

	// 	}
	// 	break;
	// 	case '√': 
	// 	result = Math.sqrt(firstNumber);
	// 		break;
	// 	case '^': 
	// 	result = Math.pow(firstNumber, secondNumber)
	// 		break;
	// }

	//dis.text(str);
	//return eval(str)
	//return result
//}

$('#equal-sign').on('click', function(){
	//var outCome = equal(firstNumbers, opO,secondNumbers)
	if(eval(str) === Infinity){
		$('#img').show();
		$('#calc').hide()
	}
	dis.text(eval(str));
	console.log(eval(str))
	str = eval(str)
	check = 1;
	//clearAll();
	//firstNumbers.push(outCome);
	//checker = 'first';

})

// function clearAll() {
// 	str = ''
// 	//firstNumbers = [0];
// 	//secondNumbers = [];
// 	//checker = 'first';
// 	//opO = '';

// }

//listen to clear button to clear our str variable
//and display 0
$('#clear-display').on('click',function () {
	//clearAll();
	str = ''
	dis.text(0);
})