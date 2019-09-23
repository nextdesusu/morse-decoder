const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr){
    let code = "", current = "";
    for (let i = 0; i < expr.length; i += 10){
        if (expr[i] == '*'){
            code += ' ';
            //********** is space so if start is * other 9 is * as well so i just have to add ' '
        } else {
            for (let j = i; j < (i + 9); j += 2){
                let symbol = expr[j] + expr[j + 1];
                if (symbol == "10"){
                    current += '.';
                } else if (symbol == "11"){
                    current += '-';
                }
                //interpretate 10 to . and 11 to -
            }
            code += MORSE_TABLE[current];
            //get the value of morse code
            current = "";
        }
    }
    return code;
}

module.exports = {
    decode
}