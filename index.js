const age = 18;
//strict equality operator
if (age === 18) console.log( `You became an adult (strict)`);

if (age == 18) console.log(`You just became an adult (loose)`);
const favorite = prompt('What is your favorite number ?');
console.log(typeof favorite);

if (favorite === 23){console.log(`Cool! 23 is an amazing number`)}//22 === 23 false
else if (favorite === 7){console.log(`7 is also a cool number`)}
else if (favorite ===9) {console.log(`9 is also a cool number`)}
else {console.log(`Number is not 23 or 7 or 9`)}

if (favorite !== 23) console.log(`Why not 23?`); //strict