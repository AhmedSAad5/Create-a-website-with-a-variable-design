let image = document.querySelector('.img');
let container = document.querySelector('.container');

function ChangePhoneColor (PhoneColor){
  image.src = PhoneColor;
}

function ChangeBackgroundColor (BackgroundColor){
  container.style.background = BackgroundColor;
}