
var firstNumbers = [];
var secondNumbers = [];
var opO = '';
var checker = 'first';
var dis = $('#display-opration')

$('#img').hide()
$('.num-btn').on('click', function(event){
	if (checker === 'first') {
 		firstNumbers.push($(event.target).val())
 		dis.text(parseInt(firstNumbers.join('')))
 	console.log(firstNumbers)
 	}else if (checker === 'second'){
 		secondNumbers.push($(event.target).val())
	console.log(secondNumbers)
	dis.text( parseInt(secondNumbers.join('')))
 	}
 	

})

$('.op-btn').on('click', function(event){
	opO = $(event.target).val();
	checker = 'second'
	dis.text(opO)
})

function equal(firstNumbers, opO, secondNumbers){
	var firstNumber = parseInt(firstNumbers.join(''));
	var secondNumber = parseInt(secondNumbers.join(''));
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
		}else {
			result = firstNumber / secondNumber;		
		}
		break;	
	}
	dis.text(result);
}

$('#equal-sign').on('click', function(){
	equal(firstNumbers, opO, secondNumbers);
})



