// DECLARING VARIABLE
const textInput = document.querySelector(".sentence");
const wordsOutput = document.querySelector(".words");

const counter = document.querySelector(".counter");
const displaySentences = document.querySelector(".displaySenteces");

const submitBtn = document.querySelector(".sbmSentence");
const checkWords = document.querySelector('.checkbox');
const checkLongestWord = document.querySelector('.checkboxs');

const sentences = [];
let lastFiveSentences = [];

// CONNECT DOM WITH FACTORY FUNCTION
let wordsWidgetInstance = wordsWidgetFactory();

// GET SENTENCES FROM THE LOCAL STORAGE
if (localStorage["lastFive"]) {
    lastFiveSentences = JSON.parse(localStorage.getItem("lastFive"));
    }
console.log(lastFiveSentences)
   

// MARK LONGER WORDS
const markLongerWords = () => {
    const words = textInput.value;
    const word = words.split(" ");

    let count = 0;
    let wordsWidget = "";

    // localStorage.setItem("lastFive", JSON.stringify(sentences));  

    // if(words !== undefined && !sentences.includes(words)){
    //     sentences.push(words);
    //     displaySentences.innerHTML = lastFiveSentences;
    // }else if (words == "") {
    //     alert("nothing to add");
    // }
    // displaySentences.innerHTML = lastFiveSentences;
    
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

        if ((checkWords.checked == true) && (wordelement.length > 4)) {
            checkLongerWord += `<mark style="padding: 10px; background-color: darkred; color: white;">${wordelement}</mark>` + " ";
        }
         else {
            checkLongerWord += wordelement + " ";
        }
        wordsOutput.innerHTML = checkLongerWord
    }
}
// checkWords.addEventListener('change', hideUmarkedWords)

// GET THE LONGEST WORD
const getTheLongestWord = () => {
    const words = textInput.value;
    const word = words.split(" ");

    let longestWord = "";
    let anotherWord = "";

    for (let i = 0; i < word.length; i++) {
        if ((checkLongestWord.checked == true) && (word[i].length >= longestWord.length)) {
            longestWord = word[i]
        }
    }

    for (let i = 0; i < word.length; i++) {
        let wordIndex = word[i];
        if ((checkboxs.checked == true) && (wordIndex.length === longestWord.length)) {
            anotherWord += `<mark style="padding: 10px; background-color: darkgreen; color: white;">${wordIndex}</mark>` + " ";
        } else {
            anotherWord += wordIndex + " ";
        }
        wordsOutput.innerHTML = anotherWord;
    }
}
// checkLongestWord.addEventListener('change', getTheLongestWord)

// KEEP TRACK OF LAST 5 SENTENCES
const keepTrackOfLastFiveSentences = () => {

    

}
