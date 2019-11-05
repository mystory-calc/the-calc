
var firstNumbers = [];
var secondNumbers = [];
var opO = [];
var checker = 'first';


$('.num-btn').on('click', function(event){
	if (checker === 'first') {
 		firstNumbers.push($(event.target).val())
 	console.log(firstNumbers)
 	}else if (checker === 'second'){
 		secondNumbers.push($(event.target).val())
	console.log(secondNumbers)
 	}
})

$('.op-btn').on('click', function(event){
	opO.push($(event.target).val())
	console.log(opO)
	checker = 'second'
	console.log(checker)
})



