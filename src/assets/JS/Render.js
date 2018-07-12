// Rendering object
'use strict';

// Render 객체 생성 
// (base class of Router)
class Render {
  // render 객체의 속성들
  constructor(page) {
    this.view = page;
    this.components = {};
  }
  // 컴포넌트 추가 해주는 메서드
  addComponent(component) {
    this.components[component.name] = component;
  }
  // 컴포넌트들을 페이지에 보여주는 메서드
  showComponent(page) {
    const hash = window.location.hash;
    const content = [];
    // console.log('show', typeof page);
    if (`#${page.view}` === hash) {
      for (let component in page.components) {
        content.push(page.components[component].html);
      }
      this.updateView(content.join(''));
    } else {
      // console.log(page, '404');
      this.updateView('<h3>404 Page Not Found</h3>');
    }
  }
  // 보여줄 컴포넌트를 준비해주는 메서드
  updateView(content) {
    content ? 
      this.app.innerHTML = content : 
      console.error('need content to update view');
  }
}

export default Render;