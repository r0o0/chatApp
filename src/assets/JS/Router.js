import Render from './Render';
'use strict';

// Router 생성
class Router extends Render {
  constructor(target) {
    super(),
    this.app = target,
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
    const page = this.toRender(hash);
    const to_render = page.view;
    
    `#${to_render}` === hash ? super.showComponent(page) : super.showComponent(404);
  }
  toRender(url) {
    const routes = this.routes;
    let render = this.view;
    for (const index in routes) {
      const route = routes[index];

      if (`#${route.name}` === url) {
        for (const index in this.pages) {
          const page = this.pages[index];

          if (`#${page.view}` === url) {
            render = page;
            console.log('which', render);
          }
        }
      }
    }
    return render;
  }
}

export default Router;

