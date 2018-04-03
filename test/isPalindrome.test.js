// Test cases: actual --> expected
// isPalindrome('') --> true
const isPalindrome = require("../src/isPalindrome");
describe('is Palindrome', () => {
    it("should return a blank as true", function() {   
        expect(isPalindrome(" ")).toEqual(true);
    })


// isPalindrome('a') --> true
    it("should return a character as true", function() {   
        expect(isPalindrome("a")).toEqual(true);
    })

// isPalindrome('ab') --> false
    it("should return two characters not a palindrome as false", function() {   
        expect(isPalindrome("ab")).toEqual(false);
    })

// isPalindrome('abc') --> false
it("should return three characters not a palindrome as false", function() {   
    expect(isPalindrome("abc")).toEqual(false);
})
// isPalindrome('abba') --> true
it("should return four characters that is a palindrome as true", function() {   
    expect(isPalindrome("abba")).toEqual(true);
})

// isPalindrome('tacocat') --> true
it("should return a word that is a palindrome as true", function() {   
    expect(isPalindrome("tacocat")).toEqual(true);
})

// isPalindrome('racecar') --> true
it("should return a word that is a palindrome as true", function() {   
    expect(isPalindrome("racecar")).toEqual(true);
})

// isPalindrome('umbrella') --> false
it("should return a word that is not a palindrome as false", function() {   
    expect(isPalindrome("umbrella")).toEqual(false);
})

});
