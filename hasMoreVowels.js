// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

function hasMoreVowels (word) {
    let count = word.match(/[aeiou]/gi).length
    return count > word.length - count
}

// ------ One line of code version --------

// const hasMoreVowels = (word) => { return word.match(/[aeiou]/gi).length > word.length / 2 }

console.log(hasMoreVowels("Aal"))