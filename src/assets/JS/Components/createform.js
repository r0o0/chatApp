// 채팅 방 생성 폼 component
'use strict';

const form = () => `
  <form> 
    <label for="title">Title</label> 
    <input id="title" type="text" name="title"> 
    <label for="description">Description</label> 
    <textarea id="description" name="description" maxlength="200"></textarea> 
    <button type="submit">Create Chatroom</button>
  </form>
`
function Form() {
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
}

