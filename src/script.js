
class MixedGame {
    constructor(words){ 
        this.secondsPerWord = 30;
        this.remainingSeconds = this.secondsPerWord;
        this.isCountdownStarted = false;
        this.timeInterval = null;
        this.word = {word: '', hint: ''};
        this.wordsList = words;

        this.startButton = document.getElementById('start-btn');
        this.wordElement = document.getElementById('word');
        this.userInput = document.getElementById('user-input');
        this.menuContainer = document.getElementById('menu-container');
        this.gameContainer = document.getElementById('game-container');
        this.timeElement = document.getElementById('time');

        // Add listener to start button
        this.startButton.addEventListener('click', (event) => {
            // hide menu and show game
            this.menuContainer.style.display = 'none';
            this.gameContainer.style.display = 'block';
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
        // Agafar duna llista de paraules etc
        const random = Math.floor(Math.random() * this.wordsList.length);
        this.word = this.wordsList[random];
        
        

        // tornar a pintar la paraula al HTML
        this.wordElement.innerHTML = this.word.word;
        // Actualitzar hint
    }

    loseGame(){
        clearInterval(this.timeInterval);
        //this.isCountdownStarted = false;
        alert("You died!!!!!");
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
            alert("Excel-Ent!!!")
            this.resetCountdown();
            // Clear input!!!!
            this.userInput.value = '';
            this.nextWord();

            // next word method
            // reset countdown, display new word, etc (maibe clear and restart setInterval again, to avoid loosing time)
        } 

    }





}




