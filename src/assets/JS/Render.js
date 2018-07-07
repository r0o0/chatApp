class Render {
  constructor(target, view) {
    console.log('test');
    this.app = document.querySelector(target);
    this.view = view; 
    this.components = {};
  }
  addComponent(component) {
    this.components[component.name] = component;    
  }
  showComponent() {
    const content = [];
    this.render = this.components;
    for (let component in this.components) {
        content.push(this.render[component].html);
    }
    
    this.updateView(content.join('')); 
  }
  updateView(component) {
    if(this.render) {
      // console.log('updateView', typeof component);
      // console.log('update.html', this.app.innerHTML);
      this.app.innerHTML = component;
      this.render = {};
      console.log(this.render);
    } else {
      this.app.innerHTML = '<h3>404 Page Not Found</h3>';
    }
  }
}

export default Render;