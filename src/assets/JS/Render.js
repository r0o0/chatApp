// Rendering object
'use strict';

class Render {
  constructor(page) {
    this.view = page;
    this.components = {};
  }
  addComponent(component) {
    this.components[component.name] = component;
  }
  showComponent(page) {
    const hash = window.location.hash;
    const content = [];
    console.log('show', typeof page);
    if (`#${page.view}` === hash) {
      for (let component in page.components) {
        content.push(page.components[component].html);
      }
      this.updateView(content.join(''));
    } else {
      console.log(page, '404');
      this.updateView('<h3>404 Page Not Found</h3>');
    }
  }
  updateView(content) {
    console.log('update', content);
    content ? 
      this.app.innerHTML = content : 
      console.error('need content to update view');
  }
}

console.log('Render class', typeof new Render);

export default Render;