function makeLine(size, char = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}

console.log(makeLine(5));

function makeSquare(size, char = '#') {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += makeLine(size, char);
        if (i < size - 1) {
            square += '\n';
        }
    }
    return square;
}

console.log(makeSquare(5));

function makeRectangle(width, height, char = '#') {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width, char);
        if (i < height - 1) {
            rectangle += '\n';
        }
    }
    return rectangle;
}

console.log(makeRectangle(5, 3));


function makeSquare(size, char = '#') {
    return makeRectangle(size, size, char);
}

console.log(makeSquare(5));

function makeDownwardStairs(height, char = '#') {
    let stairs = '';
    for (let i = 1; i <= height; i++) {
        stairs += makeLine(i, char);
        if (i < height) {
            stairs += '\n';
        }
    }
    return stairs;
}

console.log(makeDownwardStairs(5));


function makeSpaceLine(numSpaces, numChars, char = '#') {
    let line = '';
    for (let i = 0; i < numSpaces; i++) {
        line += ' ';
    }
    for (let i = 0; i < numChars; i++) {
        line += char;
    }
    for (let i = 0; i < numSpaces; i++) {
        line += ' ';
    }
    return line;
}

console.log(makeSpaceLine(3, 5));


function makeIsoscelesTriangle(height, char = '#') {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        let numSpaces = height - i - 1;
        let numHashes = 2 * i + 1;
        triangle += makeSpaceLine(numSpaces, numHashes, char).trim();
        if (i < height - 1) {
            triangle += '\n';
        }
    }
    return triangle;
}

console.log(makeIsoscelesTriangle(5));

function makeDiamond(height, char = '#') {
    let diamond = '';
    // Top half including the middle row
    for (let i = 0; i < height; i++) {
        let numSpaces = height - i - 1;
        let numHashes = 2 * i + 1;
        diamond += makeSpaceLine(numSpaces, numHashes, char).trim();
        if (i < height - 1) {
            diamond += '\n';
        }
    }
    // Bottom half excluding the middle row
    for (let i = height - 2; i >= 0; i--) {
        let numSpaces = height - i - 1;
        let numHashes = 2 * i + 1;
        diamond += '\n' + makeSpaceLine(numSpaces, numHashes, char).trim();
    }
    return diamond;
}

console.log(makeDiamond(5));

console.log(makeLine(5, '*'));
console.log(makeSquare(5, '*'));
console.log(makeRectangle(5, 3, '*'));
console.log(makeDownwardStairs(5, '*'));
console.log(makeSpaceLine(3, 5, '*'));
console.log(makeIsoscelesTriangle(5, '*'));
console.log(makeDiamond(5, '*'));





