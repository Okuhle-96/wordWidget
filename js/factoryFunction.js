const wordsWidgetFactory = () =>{

  const words = "";
  let count = 0;

  const markLongerWordsFactory = () => {
 
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
        return wordsWidget;
    }
  }
 
  const getTheCountFactory = () => {
    return count;
  }

  const hideUmarkedWordsFactory = () => {
    const word = words.split(" ");
  
    let checkLongerWord = "";
  
    for (let i = 0; i < word.length; i++) {
        const wordelement = word[i];
  
        if((checkbox.checked === true) && (word[i].length >= 5)) {
            checkLongerWord += `<mark style="background-color: red; padding: 10px; color: white;>${wordelement}</mark> `
        } else {
  
            checkLongerWord += ''
        }
        return checkLongerWord
    }
  
  }

  const getTheLongestWordFactory = () => {

    const word = words.split(" ");
  
    let longestWord = "";
  
    for (let i = 0; i < word.length; i++) {
        if(word[i].length >= longestWord.length) {
            longestWord = word[i]
        }
    }
   return `<mark style="background-color: green; padding: 10px; color: white;">${longestWord}</mark>`;
    }
      
      return{
        markLongerWordsFactory,
        getTheCountFactory,
        hideUmarkedWordsFactory,
        getTheLongestWordFactory
      }
    }