let r = Math.random() * 10;
let randomNumber = Math.ceil(r)
let input = document.querySelector('#input');
let submit = document.querySelector('#button');
let text = document.querySelector('#feedbacktext');
let attempt = document.querySelector("#attempts");
let restart = document.querySelector('#restart')
let attemptcount = 0;
submit.addEventListener('click', () =>{
    let guess = parseInt(input.value, 10)
    if(isNaN(guess)){
        text.innerText = 'INVALID INPUT';
        text.style.color = 'red';
    }
    else{
    attemptcount++;
    attempt.innerText ="Attempt Number: " + attemptcount.toString();
    
    if (guess < randomNumber){
        text.innerText = 'oops, too low!';
        text.style.color = 'blue';
    } 

    else if(guess > randomNumber){
        text.innerText = 'oops, too high!';
        text.style.color = 'blue';

    }
    else{
        text.innerText = "THAT'S IT!!!";
        text.style.color = '#00FF00';
    }
}
} )
restart.addEventListener('click', () =>{
    randomNumber = Math.ceil(Math.random() * 10);
    attemptcount = 0;
    attempt.innerText = "Attempt Number: " + attemptcount;
    text.innerText = '';
    text.style.color = 'black';
    input.value = '';
})


