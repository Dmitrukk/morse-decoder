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

function decode(expr) {
    let decoderStr = "";
    const lettersArray = expr.match(/.{1,10}/g);
    lettersArray.forEach((element) => {
        let codeStr = "";
        for (let i=0; i<element.length; i+=2) {
        let item =  element.substr(i, 2);
        if (item === '11') {
            codeStr += '-';
        }
        if (item === '10') {
            codeStr += '.';
        }
        if (item === '**') {
            i = element.lenght;
            codeStr += ' ';
        }
    }
        for (let key in MORSE_TABLE) {
            if (key === codeStr) {
                decoderStr += MORSE_TABLE[key];
            }
            
        }
        if (codeStr === ' ') {
            //console.log(' ');
            decoderStr +=' ';
        }
      });
      return decoderStr;
}


module.exports = {
   decode
}
