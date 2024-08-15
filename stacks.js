// Application of stack

/**
 * It is used for:
 * Keeping the history of sites in browser (forward/backward feature)
 * To redo/undo in text editors
 * Reversing strings
 * Fetching the top item from a list in constant time
 */

var letters = []; // This is the stack

var word = "hariom";

var rword = "";

// Insert the lettrs of the words into the stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// Remove items from the stack (i.e print the words in reverse order)
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

// Check if the word is a palindrome
if (word === rword) {
  console.log("The word falls under palindrome family.");
} else {
  console.log("The word is not a palindrome");
}
