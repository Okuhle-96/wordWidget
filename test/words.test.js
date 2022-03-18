describe('WORDS WIDGET FACTORY FUNCTION', function(){
    describe('addWords function', function(){
   
        it('should be able to add words.', function(){
            let wordsTest = wordsWidgetFactory();

            assert.equal(wordsTest.addWords('This is an orange cap'), 'This is an orange cap');
        });
    });
    
    describe('wordsArray function', function(){
        it('should be able to return an array containing 5 words or more', function(){
            let wordsTest = wordsWidgetFactory();
            
            wordsTest.addWords('');
            assert.equal(wordsTest.wordsArrays(['']), '');
        });
    });
    
});