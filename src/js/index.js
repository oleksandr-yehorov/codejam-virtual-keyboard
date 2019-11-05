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

  arrayOfKeys.forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();

    const event = new Event('keypress');
    const { keyName } = keys[el.getAttribute('data-key')];

    if (keyName.isLetter) {
      event.key = keyName.en;
    } else {
      event.key = keyName.number;
    };

    document.dispatchEvent(event);
  }));

  document.addEventListener('keydown', (e) => {
    e.preventDefault();

    const { keyCode } = e;
    const element = document.querySelector(`[data-key="${keyCode}"]`);
    const numEl = element.getAttribute('data-key');

    element.classList.add('hover');
    if (!keys[e.keyCode].isSysBtn) textArea.value += e.key;

    // System buttons
    if (+numEl === 8) {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (+numEl === 13) {
      textArea.value += '\n';
    } else if (+numEl === 9) {
      textArea.value += '\t';
    } else if (+numEl === 32) {
      textArea.value += ' 1';
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    }

  });

  document.addEventListener('keyup', (e) => {
    const { keyCode } = e;
    const element = document.querySelector(`[data-key="${keyCode}"]`);

    element.classList.remove('hover');
  });
}