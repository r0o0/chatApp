import Render from './Render';
'use strict';

// Router 객체 생성
// sub class of Render
class Router extends Render {
  // Router 객체의 속성들
  constructor(target) {
    super(),
      this.app = document.querySelector(target),
      this.routes = [],
      this.pages = {},
      this.hashChange = this.hashChange.bind(this);
    
    // 브라우저의 hash가 바뀌면 hashChange 메서드 실행
    window.addEventListener('hashchange', this.hashChange);
    // HTML이 다 로드 되면 hashChange 메서드 실행
    window.addEventListener('DOMContentLoaded', this.hashChange);
  }
  // 라우팅할 페이지 추가
  addRoute(name, url) {
    this.routes.push({ name, url });
  }
  // 해쉬가 바뀌면 해당 해쉬 페이지를 보여주는 메서드
  hashChange() {
    const hash = window.location.hash;
    let page = this.toRender(hash);

    typeof page === 'object' ? 
      super.showComponent(page) : 
      super.showComponent(404);
    // console.log('hash2', page);
  }
  // 
  toRender(url) {
    let render = this.view;
    // console.log('all', this.routes);
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

// console.log('router', new Router);

export default Router;