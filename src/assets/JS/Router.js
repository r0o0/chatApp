'use strict';

// Router 생성
class Router {
  constructor(app) {
    this.app = app,
    this.routes = []
    this.hashChange = this.hashChange.bind(this);

    window.addEventListener('hashChange', this.hashChange);
    window.addEventListener('DOMContentLoaded', this.hashChange);
  }
  addRoute(name, url) {
    this.routes.push({ name, url });
    console.log('all routes', this.routes);
  }
  hashChange() {  
    const hash = window.location.hash;
    console.log('hash', hash);
    const routes = this.routes;
  
    for ( let index in routes) {
      const route = routes[index];
      console.log('Router route',route);
      if (`#${route.name}` === hash) {
        console.log('route.name', route.name);
        console.log('hash');
        this.app.showComponent(route.name);
      } else {
        console.log('none');
        this.app.showComponent();
      }
    }
    console.log(this.routes);
  }
}

export default Router;

