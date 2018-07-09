class Render {
  constructor(target, view) {
    this.app = document.querySelector(target);
    this.view = view;
    this.components = {};
  }
  addComponent(component) {
    this.components[component.name] = component;    
    // console.log('add', this.components);
  }
  showComponent(view) {
    const hash = window.location.hash;
    // console.log('render hash', hash);
    const content = [];
    // this.render = this.components;
    
    console.log('view',view);
    if (`#${view.view}` === hash) {
      console.log('render test', view.components);
      console.log('this comp', this.components);
      // console.log('showComp renders', this.components);
      for (let component in view.components) {
        content.push(view.components[component].html);
        // console.log('content storage', this.components[component]);
      }
      console.log(content);
      this.updateView(content.join('')); 
      // this.render = {};
      // console.log('showComp render', this.components);
    } else if (view === 404) {
      this.updateView('<h3>404 Page Not Found</h3>');
    } 
  }
  updateView(content) {
    const hash = window.location.hash;
    console.log(hash);
    console.log('update', content);
    // console.log(component);
    if(content) {
      this.app.innerHTML = content;      
      // console.log('updateView render', this.render);
    } else {
      console.log('no content');
      // console.log('updateView.else', component);
    }
  }
}

// console.log('Render class', new Render);

export default Render;  