function startGame() {
  // Ukryj elementy .logo i .buttonStartGame
  const logo = document.querySelector('.logo');
  const buttonStartGame = document.querySelector('.buttonStartGame');
  logo.style.display = 'none';
  buttonStartGame.style.display = 'none';

  // Pokaż element #Level1
  const level1 = document.querySelector("#Level1");
  level1.style.display = "block";

  const gameBody = document.querySelector('.game');
  gameBody.style.background = 'linear-gradient(50deg, #97978D, #d4d4cd)';
}

  //Level 1
  const guessBar1 = document.querySelector('#guessBar1');
  const buttonLevel1 = document.querySelector('#buttonLevel1');
  const wrongText1 = document.querySelector('#showWrongText1');
  const level1 = document.querySelector('#Level1');
  
  buttonLevel1.addEventListener('click', ()=> {
    const answerLevel1 = 'dog';
    if(guessBar1.value.toLowerCase() === answerLevel1){
      level1.style.display = 'none';
    } else {
      wrongText1.style.display = "block";
      return;
    }
    const level2 = document.querySelector('#Level2')
    level2.style.display = "block";
  });

  //Level 2
  const guessBar2 = document.querySelector('#guessBar2');
  const buttonLevel2 = document.querySelector('#buttonLevel2');
  const wrongText2 = document.querySelector('#showWrongText2');
  const level2 = document.querySelector('#Level2');
  
  buttonLevel2.addEventListener('click', ()=> {
    const answerLevel2 = 'cat';
    if(guessBar2.value.toLowerCase() === answerLevel2){
      level2.style.display = 'none';
    } else {
      wrongText2.style.display = "block";
      return;
    }
    const level3 = document.querySelector('#Level3')
    level3.style.display = "block";
  });

  //Level 3
  const guessBar3 = document.querySelector('#guessBar3');
  const buttonLevel3 = document.querySelector('#buttonLevel3');
  const wrongText3 = document.querySelector('#showWrongText3');
  const level3 = document.querySelector('#Level3');
  
  buttonLevel3.addEventListener('click', ()=> {
    const answerLevel3 = 'polar bear';
    if(guessBar3.value.toLowerCase() === answerLevel3){
      level3.style.display = 'none';
    } else {
      wrongText3.style.display = "block";
      return;
    }
    const level4 = document.querySelector('#Level4')
    level4.style.display = "block";
  });

  //Level 4
  const guessBar4 = document.querySelector('#guessBar4');
  const buttonLevel4 = document.querySelector('#buttonLevel4');
  const wrongText4 = document.querySelector('#showWrongText4');
  const level4 = document.querySelector('#Level4');

  buttonLevel4.addEventListener('click', ()=> {
    const answerLevel4 = 'moose';
    if(guessBar4.value.toLowerCase() === answerLevel4){
      level4.style.display = 'none';
    } else {
      wrongText4.style.display = "block";
      return;
    }
    const level5 = document.querySelector('#Level5')
    level5.style.display = "block";
  });

  //Level 5
  const guessBar5 = document.querySelector('#guessBar5');
  const buttonLevel5 = document.querySelector('#buttonLevel5');
  const wrongText5 = document.querySelector('#showWrongText5');
  const level5 = document.querySelector('#Level5');
  const specifyParrot = document.querySelector('#specifyParrot');

  buttonLevel5.addEventListener('click', ()=> {
    const answerLevel5 = ['grey parrot', 'parrot'];
    if(guessBar5.value.toLowerCase() === answerLevel5[0]){
      level5.style.display = 'none';
      const level6 = document.querySelector('#Level6')
      level6.style.display = "block";
    } else if(guessBar5.value.toLowerCase() === answerLevel5[1]){
      wrongText5.style.display = "none";
      specifyParrot.style.display = 'block';
    }
    else {
      specifyParrot.style.display = 'none';
      wrongText5.style.display = "block";
    }
    
  });

  //Level 6
  const guessBar6 = document.querySelector('#guessBar6');
  const buttonLevel6 = document.querySelector('#buttonLevel6');
  const wrongText6 = document.querySelector('#showWrongText6');
  const level6 = document.querySelector('#Level6');
  const specifyShark = document.querySelector('#specifyShark');

  buttonLevel6.addEventListener('click', ()=> {
    const answerLevel6 = ['tiger shark', 'shark'];
    if(guessBar6.value.toLowerCase() === answerLevel6[0]){
      level6.style.display = 'none';
      const level7 = document.querySelector('#Level7')
    level7.style.display = "block";
    } else if(guessBar6.value.toLowerCase() === answerLevel6[1]){
      wrongText6.style.display = "none";
      specifyShark.style.display = 'block';
    }
    else {
      specifyShark.style.display = 'none';
      wrongText6.style.display = "block";
    }
  });

  //Level 7
  const guessBar7 = document.querySelector('#guessBar7');
  const buttonLevel7 = document.querySelector('#buttonLevel7');
  const wrongText7 = document.querySelector('#showWrongText7');
  const level7 = document.querySelector('#Level7');
  const specifyPanda = document.querySelector('#specifyPanda');

  buttonLevel7.addEventListener('click', ()=> {
    const answerLevel7 = ['red panda', 'panda'];
    if(guessBar7.value.toLowerCase() === answerLevel7[0]){
      level7.style.display = 'none';
      const level8 = document.querySelector('#Level8')
      level8.style.display = "block";
    } else if(guessBar7.value.toLowerCase() === answerLevel7[1]){
      wrongText7.style.display = "none";
      specifyPanda.style.display = 'block';
    }
    else {
      specifyPanda.style.display = 'none';
      wrongText7.style.display = "block";
    }
  });

  //Level 8
  const guessBar8 = document.querySelector('#guessBar8');
  const buttonLevel8 = document.querySelector('#buttonLevel8');
  const wrongText8 = document.querySelector('#showWrongText8');
  const level8 = document.querySelector('#Level8');

buttonLevel8.addEventListener('click', () => {
    const answerLevel8 = ['tapir'];
    if (guessBar8.value.toLowerCase() === answerLevel8[0]) {
        level8.style.display = 'none';
        const level9 = document.querySelector('#Level9');
        level9.style.display = "block";
    } else {
        wrongText8.style.display = "block";
    }
});

//Level 9
const guessBar9 = document.querySelector('#guessBar9');
const buttonLevel9 = document.querySelector('#buttonLevel9');
const wrongText9 = document.querySelector('#showWrongText9');
const level9 = document.querySelector('#Level9');

buttonLevel9.addEventListener('click', () => {
    const answerLevel9 = ['armadillo'];
    if (guessBar9.value.toLowerCase() === answerLevel9[0]) {
        level9.style.display = 'none';
        const level10 = document.querySelector('#Level10');
        level10.style.display = "block";
    } else {
        wrongText9.style.display = "block";
    }
});

//Level 10
const guessBar10 = document.querySelector('#guessBar10');
const buttonLevel10 = document.querySelector('#buttonLevel10');
const wrongText10 = document.querySelector('#showWrongText10');
const level10 = document.querySelector('#Level10');

buttonLevel10.addEventListener('click', () => {
    const answerLevel10 = ['axolotl'];
    if (guessBar10.value.toLowerCase() === answerLevel10[0]) {
        level10.style.display = 'none';
        const endScreen = document.querySelector('#endScreen');
        endScreen.style.display = "block";
    } else {
        wrongText10.style.display = "block";
    }
});


