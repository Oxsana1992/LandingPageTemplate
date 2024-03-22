import Header from '../Header';

import Root from '../Root';

import Footer from '../Footer';

import './App.css';
 
class App {
    async render() {
        await Header.render();
        Root.render();
        Footer.render();
    }
} 

export default new App();