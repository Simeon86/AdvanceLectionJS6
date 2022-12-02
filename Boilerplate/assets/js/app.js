var sum = function(a,b) {
    return a + b;
}
console.log(sum(1,2))

if ( true) {
    alert('true')
}

4 == 4
true
4 === 4
true
4 == '4'
true
4 === '4'
false

!true
false
!!true
true
!!!true
false

if ( !false) {
    alert('true')
}

if ( !(5 > 6)) {
    alert('true')
}

4 > 5 && 5 > 0
false
44 > 5 && 5 > 0
true

!!null
false
!!undefined
false
!!{}
true
Object.create({})
{}

if (5 > 6) {
    alert('true')
} else {
    alert('false')
}

var x = 5;
if ( x > 10 ) {
    alert ('x is greater than 10')
} else if ( x > 9) {
    alert ('x is greater than 9')
} else if ( x > 8) {
    alert ('x is greater than 8')
} else if ( x > 7) {
    alert ('x is greater than 7')
} else if ( x > 6) {
    alert ('x is greater than 6')
} else if ( x > 5) {
    alert ('x is greater than 5')
} else if ( x > 4) {
    alert ('x is greater than 4')
}

var x = 5;
if ( x > 10 ) {
    alert ('x is greater than 10')
} else if ( x > 9) {
    alert ('x is greater than 9')
} else if ( x > 8) {
    alert ('x is greater than 8')
} else if ( x > 7) {
    alert ('x is greater than 7')
} else if ( x > 6) {
    alert ('x is greater than 6')
} else if ( x > 5) {
    alert ('x is greater than 5')
} else if ( x > 4) {
    alert ('x is greater than 4')
} else {
    alert('false')
}

function isNumber(a) {
    if(typeof a === 'number') {
        alert('The param is Number!');
    } else {
        alert('The param is not a Number!');
    }
}

isNumber(123)
isNumber('Hello')

var isNumber = function(a) {
    if(typeof a === 'number') {
        return true;
    } else {
        return false
    }
}

isNumber(123)
isNumber('Hello')

var isNumber = function(a) {
    if(typeof a === 'number' && !isNaN(a) && a !== Infinity) {
        return true;
    } else {
        return false
    }
}