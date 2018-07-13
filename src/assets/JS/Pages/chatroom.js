import header from '../Components/header';
import nav from '../Components/gnb';
import chatlist from '../Components/chatlist';
import Render from '../Render';

const home = new Render('home');

home.add({name: 'header', html: header()});
home.add({name: 'nav', html: nav()});
home.add({name: 'chatlist', html: chatlist()});

export default home;