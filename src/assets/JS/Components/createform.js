// 채팅 방 생성 폼 component
'use strict';

const formCreate = () => `
  <form> 
    <label for="title">Title</label> 
    <input id="title" type="text" name="title"> 
    <label for="description">Description</label> 
    <textarea id="description" name="description" maxlength="200"></textarea> 
    <button type="submit">Create Chatroom</button>
  </form>
`;

export default formCreate;
