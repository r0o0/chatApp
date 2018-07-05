import Hoodie from '../.hoodie/client';
import './assets/CSS/reset.sass';
import './assets/CSS/main.sass';

// Hoodie supports the following:
console.log('hoodie', Hoodie);

const form = document.querySelector('form');
const button = document.querySelector('button');
const input_title = title;
const input_desc = description;

button.addEventListener('click', () => { test() });

let test = () => {
  const val_title = input_title.value;
  const val_desc = input_desc.value;
  
  Hoodie.store.withIdPrefix("room-").add({
    title: val_title,
    description: val_desc
  }).then(note =>
    console.log(note)).catch(err =>
      console.error(err));
}

const list = Hoodie.store.withIdPrefix("room-").findAll().then(items => {
  for (let item of items) {
    console.log(item);
  }
});