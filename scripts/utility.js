function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

    

}






function getARandomAlphabe(){
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');


  const randomNum = Math.random() * 25;
  const index = Math.round(randomNum);

  const alphabet = alphabets[index];
  return alphabet;
}






// function getARandomAlphabe(){
  // get or creat an alphabet array
//   const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//   const alphabets = alphabetString.split('');
  // console.log(alphabets);

  // get a random index between 0
//   const randomNum = Math.random.apply() * 25;
//   const index = Math.round(randomNum);
  
//   const alphabet = alphabets[index];
  // console.log(index,alphabet);
//   return alphabet;
// }
