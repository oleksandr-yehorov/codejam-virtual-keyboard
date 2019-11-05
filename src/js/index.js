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

  arrayOfKeys.forEach((element) => element.addEventListener('click', (e) => {
    e.preventDefault();

    const event = new Event('keypress');
    const { keyName } = keys[element.getAttribute('data-key')];

    /*if (keyName.isLetter) {
      event.key = keyName.en;
    } else {
      event.key = keyName.number;
    };*/

    event.key = keyName[keyName.isLetter ? 'en' : 'number'];

    document.dispatchEvent(event);
  }));

}