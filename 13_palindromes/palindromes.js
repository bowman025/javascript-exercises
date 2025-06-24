const palindromes = function (palindrome) {
    const palindromeFiltered = palindrome.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const palindromeReversed = palindromeFiltered.split("").reverse().join("");
    return palindromeFiltered === palindromeReversed;
};

// Do not edit below this line
module.exports = palindromes;
