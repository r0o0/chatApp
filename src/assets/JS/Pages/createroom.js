import header from '../Components/header';
import Render from '../Render';
// import { home, router } from './chatroom';
import Router from '../Router';

const create = new Render('.app', 'create');

create.addComponent({name: 'header', html: header()});

// create.addComponent({name: 'nav', html: nav()});

// create.addComponent({name: 'chatlist', html: chatlist()})

// const createRouter = new Router(create);
// createRouter.addRoute('create', '^#/create$');
// console.log('route', router.routes[0].url);

export default create;