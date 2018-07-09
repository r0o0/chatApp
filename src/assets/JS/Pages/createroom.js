import header from '../Components/header';
import Render from '../Render';
import nav from '../Components/gnb';

const create = new Render('.app', 'create');

create.addComponent({name: 'header', html: header()});
create.addComponent({name: 'nav', html: nav()});

export default create;