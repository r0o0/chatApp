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
  addRoute(name, url, fn) {
    this.routes.push({ name, url, fn});
  }
  // 해쉬가 바뀌면 해당 해쉬 페이지 보여줌
  hashChange() {
    const hash = window.location.hash;
    let page = this.toRender(hash);

    typeof page === 'object' ? 
      super.show(page) : 
      super.show(404);
  }
  // 렌더할 페이지를 감지
  toRender(url) {
    let render = this.view;

    for (const index in this.routes) {
      const route = this.routes[index];

      if (`#${route.name}` === url) {
        for (const index in this.pages) {
          const page = this.pages[index];

          if (`#${page.view}` === url) {
            return render = page;
          }
        }
        return route.fn;
      }
    }
  }
}

export default Router;