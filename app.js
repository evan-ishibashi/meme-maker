
const form = document.querySelector('#meme-input');
const memeList = document.getElementById('meme-display');

const deleteList = document.getElementsByClassName('memeblock');



form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let meme = document.createElement('div')
  let img = document.createElement('img');
  let upBlock = document.createElement('div');
  let lowBlock = document.createElement('div');
  let imgLink = document.getElementById('memeurl');
  let upInput = document.getElementById('uppertext');
  let lowInput = document.getElementById('lowertext');
  let xletter = document.createElement('div');
  xletter.textContent = 'X';
  xletter.classList.add('xover') ;


  upBlock.textContent = upInput.value; // append upper meme text
  upBlock.classList.add('uppertxt');
  meme.append(upBlock);

  meme.append(xletter); //append X in background

  lowBlock.textContent = lowInput.value; // append lower meme text
  lowBlock.classList.add('lowertxt');
  meme.append(lowBlock);

  img.setAttribute('src', imgLink.value); // append photo
  img.classList.add('img');
  meme.append(img);

  meme.onclick = function(){
    meme.remove();
  }

  meme.classList.add('memeblock');
  memeList.append(meme); /// append whole meme to section

  upInput.value = "";
  lowInput.value = "";
  imgLink.value = "";



});
