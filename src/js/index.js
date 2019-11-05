import markup from './markup';
import keys from './keys';


window.onload = () => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.innerHTML = markup;
  body.appendChild(div);

  const arrayOfKeys = document.querySelectorAll('.key');
  const textArea = document.querySelector('.textarea');
  const li = document.querySelectorAll('li');

  
}