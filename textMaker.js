const bagOfWords = ['gists', 'types', 'operators', 'iterations', 'problem solving'];
let sourceText = 'Today I learned about ';
const sentenceBuilder = function(arr){
    let lastElement = '.';
    for (let word = 0; word < arr.length; word++) {
        sourceText = sourceText + `${arr[word]}, `;
    }
    sourceText = sourceText.slice(0, sourceText.length-2) + lastElement;
    return sourceText;
}

console.log(sentenceBuilder(bagOfWords));
