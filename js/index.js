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

    for (let i = 0; i < word.length; i++) {
        const wordelement = word[i];

        if (wordelement.length > 4) {
            wordsWidget += `<mark style="padding: 10px; background-color: goldenrod; color: white;">${wordelement}</mark> `
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

// HIDE UNMARKED WORDS
const hideUmarkedWords = () => {
    const words = textInput.value;
    const word = words.split(" ");

    let checkLongerWord = "";


    for (let i = 0; i < word.length; i++) {
        const wordelement = word[i];

        if ((checkbox.checked == true) && (wordelement.length > 4)) {
            checkLongerWord += `<mark style="padding: 10px; background-color: darkred; color: white;">${wordelement}</mark>` + " ";
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
    let anotherWord = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i].length >= longestWord.length) {
            longestWord = word[i]
        }
    }

    for (let i = 0; i < word.length; i++) {
        let wordIndex = word[i];
        if (wordIndex.length === longestWord.length) {
            anotherWord += wordIndex + " ";

        }
        wordsOutput.innerHTML = `<mark style="background-color: darkgreen; padding: 10px; font-family: monospace; margin: 10px; color: white;">${anotherWord}</mark>` + " ";
    }
}
checkLongestWord.addEventListener('change', getTheLongestWord)

// KEEP TRACK OF LAST 5 SENTENCES
const keepTrackOfLastFiveSentences = () => {

}
