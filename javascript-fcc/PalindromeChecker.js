function palindrome(str) {
  let word = str.replace(/_|\W/g, "").toLowerCase();
  let newWord = "";

  
  for (let i = word.length - 1; i > -1; i--) {
    newWord += word[i];
    }
  
  return word === newWord;
}

palindrome("eye");
