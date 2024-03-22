import One from '../Screens/One';  

import Two from '../Screens/Two'; 

import Three from '../Screens/Three';

import Four from '../Screens/Four';

import Five from '../Screens/Five';

import Six from '../Screens/Six';

import Seven from '../Screens/Seven';

import './Root.css';
 
class Root {
    async render() {
        await One.render();
        One.eventListener();
        await Two.render();
        Two.eventListener();
        await Three.render();
        await Four.render();
        Four.eventListener();
        await Five.render();
        Five.eventListener();
        await Six.render();
        await Seven.render();
    }
} 

export default new Root();