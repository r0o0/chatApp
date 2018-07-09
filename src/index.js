import Hoodie from '../.hoodie/client';
import './assets/CSS/reset.sass';
import './assets/CSS/main.sass';
import Render from './assets/JS/Render';
import Router from './assets/JS/Router';
import create from './assets/JS/Pages/createroom';
import home from './assets/JS/Pages/chatroom';


// Hoodie supports the following:
// console.log('hoodie', Hoodie);


// window.addEventListener('hashchange', () => {
//   const hash = window.location.hash;
//   console.log('window.hash', hash);
//   alert(hash);
// });
const app = document.querySelector('.app');
// const hash = window.location.hash;
const router = new Router(app);

// console.log(pages);

router.addRoute('home', '^#/home$');
router.addRoute('create', '^#/create$');
router.pages = { home, create };

// console.log('in home', router.routes);
// for (const route in router.routes) {
//   const view = router.routes[route].name;
//   if (`#${view}` === hash) {
//     router.route
//   }
// }
// console.log(router.pages = {home, create});
// router.view = 'home';
// if (hash === router)
// router.components = home.components;
// for (let route in router.routes) {
//   const view = router.routes[route].name;
//   if (`#${view}` === hash) {
//     for (const page in pages) {
//       const each = pages[page];
//       if (view === each.view) {
//         router.components = each.components;
//         console.log(view, router.components);
//       }
//     }
//   }
// }


// const main = document.querySelector('#home');
// main.addEventListener('click', () => {
//   console.log('click');
// });
