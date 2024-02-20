
class MixedGame {
    constructor(words){ 
        this.secondsPerWord = 30;
        this.remainingSeconds = this.secondsPerWord;
        this.score = 0;
        this.isCountdownStarted = false;
        this.timeInterval = null;
        this.word = {word: '', hint: '',category: ''};
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
        this.backButton2 = document.getElementById('mainMenu')
        this.allButtons = document.querySelectorAll('button')
        this.menuLevel =document.getElementById('levels')

        //adding difficulties

        this.easyButton = document.getElementById('easy');
        this.normalButton = document.getElementById('normal')
        this.hardButton = document.getElementById('hard')

        //adding categories

        
        

        this.menuLevel.style.display = 'none'

    
        // Add listener to start button
        this.startButton.addEventListener('click', (event) => {
            // hide menu and show game
            this.menuContainer.style.display = 'none';
            this.menuLevel.style.display = 'block'
            this.gameContainer.style.display = 'none';
            this.userInput.value = "";
        })

        this.easyButton.addEventListener('click',()=>{
            this.gameContainer.style.display = 'block';
            this.menuLevel.style.display = 'none';
            this.timeElement.innerHTML = this.remainingSeconds;
        })

        this.normalButton.addEventListener('click',()=>{
            this.gameContainer.style.display = 'block';
            this.menuLevel.style.display = 'none';
            this.remainingSeconds = 20;
            this.timeElement.innerHTML = this.remainingSeconds;

        })

        this.hardButton.addEventListener('click',()=>{
            this.gameContainer.style.display = 'block';
            this.menuLevel.style.display = 'none';
            this.remainingSeconds = 10;
            this.timeElement.innerHTML = this.remainingSeconds;
        })




        this.resetButton.addEventListener('click',() =>{
            this.reset()
        })

        this.allButtonsclickSound();

        
        this.backButton.addEventListener('click',() =>{
            this.menuContainer.style.display = 'block';
            this.gameContainer.style.display = 'none';
            this.menuLevel.style.display = 'none';
            this.score =0;
            this.scoreElement.innerHTML = this.score;
            this.resetCountdown();
        })

        this.backButton2.addEventListener('click',()=>{
            this.menuContainer.style.display = 'block';
            this.gameContainer.style.display = 'none';
            this.menuLevel.style.display = 'none';
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

        var audio = new Audio('./assets/mixkit-cartoon-voice-laugh-343.wav');
            audio.play()
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

            var audio = new Audio('./assets/mixkit-positive-interface-beep-221.wav');
            audio.play()
            
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
      
      this.score =0;
      this.scoreElement.innerHTML = this.score;
      this.userInput.value = '';
      this.nextWord();
      
            
    }

    allButtonsclickSound(){
        var audio = new Audio('./assets/mixkit-game-click-1114.wav');
        this.allButtons.forEach(button => {
            button.addEventListener("click",() =>{
                audio.play()
            })
        })

    }

    levels(){
        

    }
  

}




