import Render from './Render';
'use strict';

// Router 객체 생성
// base class: Render
class Router extends Render {
  constructor(target) {
    super(),
      this.app = document.querySelector(target),
      this.routes = [],
      this.pages = {},
      this.hashChange = this.hashChange.bind(this);
  
    window.addEventListener('hashchange', this.hashChange);
    window.addEventListener('DOMContentLoaded', this.hashChange);
  }
  addRoute(name, url) {
    this.routes.push({ name, url });
  }
  hashChange() {
    const hash = window.location.hash;
    let page = this.toRender(hash);
    console.log('hash1', page);
    typeof page === 'object' ? super.showComponent(page) : super.showComponent(404);
    console.log('hash2', page);
  }
  toRender(url) {
    let render = this.view;
    console.log('all', this.routes);
    for (const index in this.routes) {
      const route = this.routes[index];

      if (`#${route.name}` === url) {
        for (const index in this.pages) {
          const page = this.pages[index];
          if (`#${page.view}` === url) {
            return render = page;
          }
        }
      }
    }
  }
}


export default Router;