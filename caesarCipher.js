const charArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", ",", "'", " "];
// const cipherArray = ["d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", ",", " ", "a", "b", "c"];

function caesarCipher(string, shift){
    const newArray = [];
    const shiftArray = arrayLoop(shift, charArray)
    let stringArray = string.split("");
    for(let i = 0; i < stringArray.length; i++){
        let charIndex = charArray.indexOf(stringArray[i]);
        newArray.push(shiftArray[charIndex]);
    }
    const encodedPhrase = newArray.join("");
    return encodedPhrase;
}

function arrayLoop(num, array){
    let shiftArray = [];
    for(let i = 0; i < array.length; i++){
        let shiftIndex = i + num
        if (shiftIndex >= array.length){
            let restartIndex = shiftIndex - array.length;
            shiftArray.push(array[restartIndex]);
        } else {
            shiftArray.push(array[shiftIndex]);
        }
    }
    return shiftArray;
}

console.log(caesarCipher("hello", 5));

module.exports = caesarCipher