// hoodie
import Hoodie from '../.hoodie/client';

// Router
import Router from './assets/JS/Router';

// Pages
import create from './assets/JS/Pages/createroom';
import home from './assets/JS/Pages/chatroom';

// CSS
import './assets/CSS/reset.sass';
import './assets/CSS/main.sass';

// Hoodie supports the following:
console.log('hoodie', Hoodie);

// 애플리케이션 라우팅 (router)
((g = window, d = document) => {
  const app = d.querySelector('.app');
  const router = new Router(app);

  // 앱의 모든 페이지들을 루트로 추가
  router.addRoute('home', '^#/home$');
  router.addRoute('create', '^#/create$');
  
  // 라우터의 pages 속성에 render할 페이지들 참조
  router.pages = { home, create };
})();