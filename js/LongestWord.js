(function() {

  var button = document.getElementById('getLongestWord');

  button.onclick = function checkInput() {
    var wordCheck = document.getElementById('userInput').value;
    var letters = /^[A-Z a-z]+$/; 
    var whiteSpace = /\s/g;
    //check if value is a string of letters or sentence
    //console.log((wordCheck.match(letters)));
    if (wordCheck.match(whiteSpace) && wordCheck.match(letters)) {
      calcLength(wordCheck);
    } else {
      alert('Please enter text only.');
    }
  }
  
//FUNCTION TO CALC LENGTH OF EACH WORD AND COMPARE EACH WORD
  function calcLength(wordCheck) {
    var words = wordCheck.split(" ");
    //console.log(words);
    //var wordsInSentence = words;
    var longestWord = " ";

    for (i = 0; i < words.length; i++) {
      //var stringLength = wordsInSentence[i].length;
      if (words[i].length > longestWord.length) {
          longestWord = words[i]; 
      }

    }
    console.log(longestWord);
    //console.log(stringLength);
    
  }
})();



