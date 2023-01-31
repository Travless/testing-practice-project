function reverseString(string){
    let stringReversed = string.split("");
    let arrayReversed = stringReversed.reverse();
    let arrayJoined = arrayReversed.join("");
    return arrayJoined;
}

module.exports = reverseString