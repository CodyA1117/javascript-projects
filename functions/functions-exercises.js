function makeLine(size, char = '#'){
    let line = '';
    for (let i = 0; i < size; i++){
        line += char;

       
    }
    return line;
}

// console.log(makeLine(5, '*'));

function makeSquare(size) {
    return makeRectangle(size, size);
    // let square = '';
    // for (let i = 0; i < size; i++){
    //     let newLine = '';
    //     for (let j = 0; j < size; j++){
    //         newLine += '#';
    //     }
    //     square += newLine;
    //     if (i < size - 1){
    //         square += '\n';
    //     }
    // }
    // return square;

}
// console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width);
        if(i < height - 1) {
            rectangle += "\n";
          }
        }
    return rectangle;
      }

// console.log(makeRectangle(5,3));

function makeDownwardStairs(height){
    let stairs = "";
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1))+ '\n';
    }
    return stairs.slice(0,-1);
}
// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars){
    let spaceLine = "";
    for (let i =0; i < numSpaces; i++){
        spaceLine += " ";
    }
    for (let i = 0; i < numChars; i++){
        spaceLine += "#";

    }
    for (let i =0; i < numSpaces; i++){
        spaceLine += " ";

    }
    return spaceLine;
}

// console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height){
    let triangle = "";
    for (let i = 0; i < height; i++){
        triangle += (makeSpaceLine(height - i - 1, 2 *i + 1))+ '\n';

    }
    return triangle.slice(0,-1);
}

// console.log(makeIsoscelesTriangle(5));

function makeDiamond(height){
    let diamond = makeIsoscelesTriangle(height);
    for (let i = height - 2; i >= 0; i--){
        let numSpaces = height - i - 1;
        let numHashes = 2 * i + 1;
        diamond += "\n" + makeSpaceLine(numSpaces, numHashes);
    }
    return diamond;

}

console.log(makeDiamond(5, '*'));

