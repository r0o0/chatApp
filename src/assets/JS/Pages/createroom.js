import header from '../Components/header';
import Render from '../Render';
import nav from '../Components/gnb';
import formCreate from '../Components/createform';

import Hoodie from '../../../../.hoodie/client';

const create = new Render('create');

create.add({ name: 'header', html: header() });
create.add({ name: 'nav', html: nav() });
create.add({ name: 'form', html: formCreate() });

const store = () => {
  console.log('it works');
  console.log(Hoodie);
  const app = document.querySelector('.app');
  const form = document.querySelector('form');
  const button = document.querySelector('button');
  console.log(form);
  console.log(app.childNodes);
  console.log(button);
  const input_title = 'title';
  const input_desc = 'description';

  button.addEventListener('click', () => {
    test()
  });

  let test = () => {
    const val_title = input_title.value;
    const val_desc = input_desc.value;

    Hoodie
      .store
      .withIdPrefix("room-")
      .add({title: val_title, description: val_desc})
      .then(note => console.log(note))
      .catch(err => console.error(err));
  }

  const list = Hoodie
    .store
    .withIdPrefix("room-")
    .findAll()
    .then(items => {
      for (let item of items) {
        console.log(item);
      }
    });
  console.log('findall', list);
}

export { create as create };
export { store as store }