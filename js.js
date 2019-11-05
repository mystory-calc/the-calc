
var firstNumbers = [0];
var secondNumbers = [];
var opO = '';
var checker = 'first';
var dis = $('#display-opration')

$('#img').hide()
$('.num-btn').on('click', function(event){
console.log(firstNumbers, 'first')
console.log(secondNumbers , "second")
console.log(checker)
	if (checker === 'first') {

 		firstNumbers.push($(event.target).val())
 		dis.text(parseFloat(firstNumbers.join('')))
 		console.log(firstNumbers)

 	}else if (checker === 'second'){

 		secondNumbers.push($(event.target).val())
		console.log(secondNumbers)
		dis.text( parseFloat
			(secondNumbers.join('')))

 	}
 	

})

$('.op-btn').on('click', function(event){

	opO = $(event.target).val();
	checker = 'second'
	dis.text(opO)

})

function equal(firstNumbers, opO, secondNumbers){
	console.log(firstNumbers)
	var firstNumber = parseFloat(firstNumbers.join(''));
	console.log(firstNumber)
	var secondNumber = parseFloat(secondNumbers.join(''));
	var result = 0;

	switch(opO){
		case '+': 
		result = firstNumber + secondNumber;
			break;
		case '-': 
		result = firstNumber - secondNumber;
			break;
		case '*': 
		result = firstNumber * secondNumber;
			break;
		case '/': 
		if (secondNumber === 0) {
			console.log("we don't do that here");
			$('#img').show();
			$('#calc').hide()

		}else {
			result = firstNumber / secondNumber;

		}
		break;
		case '√': 
		result = Math.sqrt(firstNumber);
			break;
		case '^': 
		result = Math.pow(firstNumber, secondNumber)
			break;
	}

	dis.text(result);
	return result
}

$('#equal-sign').on('click', function(){

	var outCome = equal(firstNumbers, opO, secondNumbers);
	clearAll();
	firstNumbers.push(outCome);
	checker = 'second';

})

function clearAll() {

	firstNumbers = [0];
	secondNumbers = [];
	checker = 'first';
	opO = '';

}

$('#clear-display').on('click',function () {

	clearAll();
	dis.text(0);

})