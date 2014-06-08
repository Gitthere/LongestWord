var button = document.getElementById('getLongestWord');

button.onclick = function checkInput() {
var wordCheck = document.getElementById('userInput')
var letters = /^[A-Za-z]+$/; 
  //check if value is a string of letters
  if (wordCheck.value.match(letters)) {
    calcLength();
  } else {
    alert('Please enter text only.');
  }
}
  
//FUNCTION TO CALC LENGTH OF EACH WORD AND COMPARE EACH WORD
function calcLength() {
  var sentence = document.getElementById('userInput');

}


//IF EQUAL RETURN BOTH


//RETURN LONGEST WORD


