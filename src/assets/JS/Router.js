import Render from './Render';
'use strict';

// Router 생성
class Router extends Render {
  constructor(app) {
    super(),
    this.app = app,
    this.routes = [],
    this.pages = {},
    this.hashChange = this.hashChange.bind(this);

    window.addEventListener('hashchange', this.hashChange);
    window.addEventListener('DOMContentLoaded', this.hashChange);
  }
  addRoute(name, url) {
    this.routes.push({ name, url });
    // console.log('all routes', this.routes);
  }
  hashChange() {
    const hash = window.location.hash;
    console.log('current hash', hash);
    const routes = this.routes;
    console.log('all routes',routes);
    console.log('all components', this.components);
  
    for ( const index in routes) {
      const route = routes[index];
    
      if (`#${route.name}` === hash) {
        for (const index in this.pages) {
          const page = this.pages[index];

          if (`#${page.view}` === hash) {
            this.view = page;
            // this.components = page.components;
          }
        }
        console.log('true', this.view);
     
      }
    }

    if (`#${this.view.view}` === hash) {
      console.log('yes');
      // const renderPage = '#' + this.view.view;
      super.showComponent(this.view);
    } else {
      super.showComponent(404);
    }
  

    // if (hash !== `#${routes.name}`) {
      // console.log(routes);    
    // }
    // console.log(this.routes);
  }
}

// console.log(new Router);

export default Router;

