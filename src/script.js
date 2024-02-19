
class MixedGame {
    constructor(words){ 
        this.secondsPerWord = 30;
        this.remainingSeconds = this.secondsPerWord;
        this.score = 0;
        this.isCountdownStarted = false;
        this.timeInterval = null;
        this.word = {word: '', hint: ''};
        this.wordsList = words;

        this.startButton = document.getElementById('start-btn');
        this.resetButton = document.getElementById('reset')
        this.wordElement = document.getElementById('word');
        this.hintElement = document.querySelector('.hint span')
        this.userInput = document.getElementById('user-input');
        this.menuContainer = document.getElementById('menu-container');
        this.gameContainer = document.getElementById('game-container');
        this.timeElement = document.getElementById('time');
        this.scoreElement = document.getElementById('score')
        this.backButton = document.getElementById('main')

    
        // Add listener to start button
        this.startButton.addEventListener('click', (event) => {
            // hide menu and show game
            this.menuContainer.style.display = 'none';
            this.gameContainer.style.display = 'block';
        })

        this.resetButton.addEventListener('click',() =>{
            this.reset()
        })

        
        this.backButton.addEventListener('click',() =>{
            this.menuContainer.style.display = 'block';
            this.gameContainer.style.display = 'none';
        })

        this.timeElement.innerHTML = this.remainingSeconds;
        this.nextWord();
        this.userInput.addEventListener('keyup', ()=>{
            // Check is countdown is started or start it
            if(!this.isCountdownStarted){
                this.isCountdownStarted = true;
                this.startCountdown();
            }
            // Check if word is correct
            this.checkWord();     
        });
    }

   
    nextWord(){
        // Agafar d'una llista de paraules etc
        const random = Math.floor(Math.random() * this.wordsList.length);
        this.word = this.wordsList[random];
        // tornar a pintar la paraula al HTML
        
        this.wordElement.innerHTML = this.shuffleWord();
        // Actualitzar hint
        this.hintElement.innerHTML = this.word.hint;
        //update the score
        
    }

    loseGame(){
        clearInterval(this.timeInterval);
        //this.isCountdownStarted = false;
        alert("You died!!!!!");
        this.score = 0
    }

    startCountdown(){
        this.timeInterval = setInterval(()=>{
            if(this.remainingSeconds > 0){
                this.remainingSeconds--;
            }else{
                // Stop the game!!!!
                // call method loseGame, show something to user, remove keyup listener,,,
                this.loseGame();
            }
            // Refresh/Show time
            this.timeElement.innerHTML = this.remainingSeconds;
        }, 1000)
    }

    resetCountdown(){
        if(this.timeInterval !== null){
            clearInterval(this.timeInterval);
        }
        this.isCountdownStarted = false
        this.remainingSeconds = this.secondsPerWord;
        this.timeElement.innerHTML = this.remainingSeconds;


    }

    checkWord(){
        if(this.userInput.value.toLowerCase() === this.word.word.toLowerCase()){
            alert("Excelent!!!")
            this.score++;
            this.scoreElement.innerHTML = this.score;
            this.resetCountdown();
            // Clear input!!!!
            this.userInput.value = '';
            this.nextWord();
            
        } 

    }

    shuffleWord(){
        let word = this.word.word.split('')
        let wordLength = word.length
        let shuffledWord = ``
        for (let i = 0; i < wordLength; i++){ 
            const randomLetterIndex = Math.floor(Math.random() * word.length)
            const [letter] = word.splice(randomLetterIndex, 1)
            shuffledWord += letter          
        }
        return shuffledWord
       
    }

    reset(){
      if (this.isCountdownStarted){
        this.resetCountdown()
      }
      this.userInput.value = '';
      this.nextWord();
      
    }

    

}




