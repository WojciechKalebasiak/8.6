var a=prompt('Enter your a here: '),
	b=prompt('Enter your b here: '),
	value=(a*a)-(2*a*b)-(b*b);
console.log('Wynik: ' + value);
if(value > 0) {
	console.log('Wynik dodatni');
}
if(value < 0 ) {
	console.log('Wynik ujemny');
}
if (value===0) {
	console.log('Wynik = 0');
}
