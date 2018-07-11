import header from '../Components/header';
import nav from '../Components/gnb';
import chatlist from '../Components/chatlist';
import Render from '../Render';

const home = new Render('home');

home.addComponent({name: 'header', html: header()});
home.addComponent({name: 'nav', html: nav()});
home.addComponent({name: 'chatlist', html: chatlist()});

export default home;