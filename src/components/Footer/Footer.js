import { API_URL, URL_NAV, URL_CONTACTS, URL_IMG_LOGO, URL_IMG_GIT } from '../../constants/api'; 

import { getDataApi } from '../../utils/getDataApi'; 

import { ROOT_FOOTER } from '../../constants/root'; 

import './Footer.css';
 
class Footer {
    async render() {

        const dataNav = await getDataApi.getData(API_URL + URL_NAV);
        // console.log(dataNav);
        // id, name, link
        let htmlContentNav = '';

        dataNav.forEach(({name, link}) => {
            //console.log(name, link);
            htmlContentNav += `
                <li class="header__menu_li">
                    <a class="header__menu_link" href="${link}">${name}</a>
                </li>
            `;
        });

        const dataContacts = await getDataApi.getData(API_URL + URL_CONTACTS);
        // console.log(dataContacts);
        // id, name, link, imgUrl
        let htmlContentContacts = '';

        dataContacts.forEach(({ name, link, imgUrl }) => {
            //console.log( name, link, imgUrl );
            const imgSrc = URL_IMG_GIT + imgUrl + '?raw=true';
            
            htmlContentContacts += `
            <icon class="header__contact">
                <a class="header__contact_link" href="${link}" target="_blank">
                    <img class="header__contact_img" src="${imgSrc}" alt="${name}">
                </a>
            </icon> 
            `;
        });

        const htmlContentHead = `
        <div class="header__container">
            <div class="header__item_left">
                <div class="header__logo">
                    <img class="header__logo_img" 
                    src="${URL_IMG_LOGO}" alt="Logo">
                </div>
                <nav class="header__nav">
                    <ul class="header__menu">
                        ${htmlContentNav}
                    </ul>
                </nav>
            </div>
            <div class="header__item_right">
                <div class="header__contacts">
                    ${htmlContentContacts}
                </div>
                <div class="header__btn">
                    <a class="header__btn_link" href="#">Get started</a>
                </div>
            </div>
        </div>
        `;

        const htmlContentFoot = `
            <div class="footer__copy">
                Copyright &copy; 2018 by Random site
            </div>
        `;
        const htmlWrapper = `
            <footer class="footer__container">
                ${htmlContentHead}
                ${htmlContentFoot}
            </footer>
        `;

        ROOT_FOOTER.innerHTML = htmlWrapper;
    }
} 

export default new Footer();