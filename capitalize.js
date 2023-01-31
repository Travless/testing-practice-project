function capitalize(string){
    let input = string;
    let output = input.charAt(0).toUpperCase() + input.slice(1);
    return output;
};

module.exports = capitalize