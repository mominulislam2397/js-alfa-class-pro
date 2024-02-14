// function play () {
//   // step-1: hide the home screen. to hide the screen add the class hiden to the home section
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden')
//   // console.log(homeSection.classList);

//   const playgroundSection = document.getElementById('play-ground');
//   playgroundSection.classList.remove('hidden')
//   // console.log(playgroundSection.classList);

//   // show the playground 

// }

function continueGame(){
  //step -1: generate a random alphabet
  const alphabet = getARandomAlphabe();
  console.log('Your random alphabet:', alphabet);

  // set randomly generated alphabet to the screen (show it)
  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;

  // set background Color 
  setBackgroundColorById(alphabet);
  
}



function play(){
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}