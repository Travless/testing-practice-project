function analyzeArray(array){
    const average = (array) => {
        let total = 0;
        for(let i = 0; i < array.length; i++){
            total = total + array[i];
        }
        const average = total / array.length;
        return average;
    }
    
    const min = (array) => {
        const sortArray = array.sort(function(a,b){ return a - b});
        return sortArray[0];
    }

    const max = (array) => {
        const sortArray = array.sort(function(a,b){ return a - b});
        const maxLength = sortArray.length - 1;
        return sortArray[maxLength]
    }

    const length = array.length;

    const object = {
        average: average,
        min: min,
        max: max,
        length: length
    }
    return object
}

module.exports = analyzeArray