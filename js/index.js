// DECLARING VARIABLE
const textInput = document.querySelector(".sentence");
const wordsOutput = document.querySelector(".words");

const counter = document.querySelector(".counter");

const submitBtn = document.querySelector(".sbmSentence");
const checkWords = document.querySelector('.checkbox');
const checkLongestWord = document.querySelector('.checkboxs');


// CONNECT DOM WITH FACTORY FUNCTION
let wordsWidgetInstance = wordsWidgetFactory();

// MARK LONGER WORDS
const markLongerWords = () => {
 
  const words = textInput.value;
  const word = words.split(" ");

  let count = 0;
  let wordsWidget = "";

  for(let i = 0; i < word.length; i++) {
      const wordelement = word[i];

      if (wordelement.length > 4) {
          wordsWidget += `<mark>${wordelement}</mark> `
      } else {
          wordsWidget += wordelement + " ";
      }
      if (wordelement.length > 0) {
          count++
      }
      wordsOutput.innerHTML = wordsWidget;
  }
  counter.innerHTML = count;
}
submitBtn.addEventListener('click', markLongerWords)

// const markLongerWords = () => {
//     const words = textInput.value;
//     const word = words.split(" ");
//     if(word){
//         wordsWidgetInstance.markLongerWordsFactory(word);
//     }
//     wordsOutput.innerHTML = wordsWidgetInstance.markLongerWordsFactory(word);
//     counter.innerHTML = wordsWidgetInstance.getTheCountFactory();
// }
// submitBtn.addEventListener('click', markLongerWords)

// HIDE UNMARKED WORDS
const hideUmarkedWords = () => {
  const words = textInput.value;
  const word = words.split(" ");

  let checkLongerWord = "";

  for (let i = 0; i < word.length; i++) {
      const wordelement = word[i];

      if((checkbox.checked === true) && (word[i].length >= 5)) {
          checkLongerWord += `<mark style="background-color: red; padding: 10px; color: white;>${wordelement}</mark> `
      } else {

          checkLongerWord += ''
      }
      wordsOutput.innerHTML = checkLongerWord
  }

}
checkWords.addEventListener('change', hideUmarkedWords)

// GET THE LONGEST WORD
const getTheLongestWord = () => {

  const words = textInput.value;
  const word = words.split(" ");

  let longestWord = "";

  for (let i = 0; i < word.length; i++) {
      if(word[i].length >= longestWord.length) {
          longestWord = word[i]
      }
  }
  wordsOutput.innerHTML = `<mark style="background-color: green; padding: 10px; color: white;">${longestWord}</mark>`;
  }
  checkLongestWord.addEventListener('change', getTheLongestWord)

// KEEP TRACK OF LAST 5 SENTENCES
const keepTrackOfLastFiveSentences = () => {

}