var sideOne = 9;
var sideTwo = 8;
var sideThree = 9;
var isoSceles;

if (sideOne == sideTwo || sideOne == sideThree || sideTwo == sideThree) {
    isoSceles = 'Isosceles';
} else {
    isoSceles = 'not Isosceles';
}

console.log('Tringle is ' + isoSceles);