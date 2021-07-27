let guess_count = 0;
const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

document.querySelector("#check_it").addEventListener("click", checkNumber);
document.querySelector('#nr_game').addEventListener('keyup',function (event) {
    if(event.keyCode === 13){//enter tuşuna basılınca input butonu tetiklenecek. 13 => enter tuşunun keyCode numarası
        checkNumber()
    }
})

function checkNumber() {
  let userInputElement = document.querySelector("#nr_game");
  let answerLabelElement = document.querySelector("#answer");
  let guessLabelElement = document.querySelector('#count_it');

  if (userInputElement.value == randomNumber) {
      alert("You are the winner! Guess time :"+ ++guess_count);
      

    const choice = confirm("Game again");

    if(choice){
        guess_count = 0;
        randomNumber = Math.floor(Math.random() * 100 + 1);
        answerLabelElement.innerText = "";
    }else{
        alert('Thanks for playing!');
        answerLabelElement.innerText = "Best guess time"+ guess_count;
        guessLabelElement.innerText = "";
    }

  } else if (userInputElement.value == "") {
    answerLabelElement.innerText = "Enter a number";
  } else if (userInputElement.value > randomNumber) {
    guess_count++;
    guessLabelElement.innerText = `Guess count is ${guess_count}`;
    answerLabelElement.innerText = "Try a smaller number!";
  } else if (userInputElement.value < randomNumber) {
    guess_count++;
    guessLabelElement.innerText = `Guess count is ${guess_count}`;
    answerLabelElement.innerText = "Try a higher number!";
  } else if (isNaN(userInputElement.value)) {
    answerLabelElement.innerText = "It's not a number";
  }
  userInputElement.focus();//fonksiyon anında gerçekleşmesi önemli. bulunduğu yer önemli değil
  userInputElement.value = "";
}
