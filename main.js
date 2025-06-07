let randomNumber = Math.floor(Math.random() * 100) + 1; //1이상의 100까지의 숫자 중 랜덤하게 하나

// p태그 가져오기
const guesses = document.querySelector(".guesses"); //추측하는 문서의 상수
const lastResult = document.querySelector(".lastResult"); //마지막 결과의 문서의 상수
const lowOrHi = document.querySelector(".lowOrHi"); //...??

// input 태그 가져오기.
const guessSubmit = document.querySelector(".guessSubmit"); 
const guessField = document.querySelector(".guessField"); 

let guessCount = 1;
let resetButton;



function checkGuess() { //함수를 정의하는 코드
    const userGuess = Number(guessField.value);  //함수 내부 코드를 실행하기 위해선 함수의 이름을 입력하고, 그 뒤에 소괄호를 덧붙여야함
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += userGuess + " ";
}
    
    
    if (userGuess === randomNumber) { //javascript 코드에서 설정한 randomNumber 값이 플레이어의 추측과 일치하는지 확인
        lastResult.textContent = "Congratulations! You got it right!"; //축하 메세지
        lastResult.style.backgroundColor = "green"; //글자의 색
        lowOrHi.textContent = "";
        setGameOver(); //게임이 끝남을 알림
    } else if (guessCount === 10) { //이 턴이 플레이어의 마지막 턴이었는지 확인
        lastResult.textContent = "!!!GAME OVER!!!"; //게임오버 메세지
        lowOrHi.textContent = "";
        setGameOver(); //게임이 끝남을 알림
    } else {  //앞선 테스트가 모두 참을 반환하지 않았을 때, 즉 플레이어가 정답을 맞히지도 못했고, 마지막 턴도 아닐 때 실행됨.
        lastResult.textContent = "Wrong!"; //틀렸다는 메세지
        lastResult.style.backgroundColor = "red"; //글자의 색
        if (userGuess < randomNumber) { //플레이어의 추측보다 정답이 높을 때
            lowOrHi.textContent = "Last guess was too low!"; //추측이 너무 낮았다고 말해주는 메세지
        } else if (userGuess > randomNumber) { //플레이어의 추측보다 정답이 낮을 때때
            lowOrHi.textContent = "Last guess was too high!"; //추측이 너무 높았다고 말해주는 메세지
        }
    }


    guessCount++;
    guessField.value = "";
    guessField.focus();

    guessSubmit.addEventListener("click", checkGuess);

    function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textContent = "Start new game";
        document.body.append(resetButton);
        resetButton.addEventListener("click", resetGame);
    }


    function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}



guessSubmit.addEventListener('click' , checkGuess);


