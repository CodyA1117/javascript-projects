function makeLine(size){
    let line = '';
    for (let i = 0; i < size; i++){
        line += '#';

       
    }
    return line;
}

console.log(makeLine(5));

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++){
        let newLine = '';
        for (let j = 0; j < size; j++){
            newLine += '#';
        }
        square += newLine;
        if (i < size - 1){
            square += '\n';
        }
    }
    return square;

}
console.log(makeSquare(5));

function makeRectangle (width,height){

    

}