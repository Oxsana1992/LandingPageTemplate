import { API_URL, URL_ABOUT, URL_IMG_GIT } from '../../../constants/api'; 

import { getDataApi } from '../../../utils/getDataApi'; 

import { ROOT_INDEX3 } from '../../../constants/root';

import './Three.css';
 
class Three {
    async render() {

        const dataAbout = await getDataApi.getData(API_URL + URL_ABOUT);

        let htmlContentAbout = ''; 

        dataAbout.forEach(({title, imgUrl, text, line }) => {
            const srcAbout = URL_IMG_GIT + imgUrl + '?raw=true';
        
            htmlContentAbout += `
                <li class="scthree__about_icon">
                    <div class="about_icon">
                        <img class="scthree__about_img" 
                        src="${srcAbout}" alt="${title} ">
                        <div class="scthree__about_title">${title}</div>
                        <div class="scthree__about_text">${text}</div>
                    </div>  
                    <div class="scthree__line_${line}">
                        <svg width="28" height="1" viewBox="0 0 28 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="28" y2="0.5" stroke="#DAE4FE"/>
                        </svg>
                    </div>
                </li>
            `;
        }); 

        const htmlContentScThree = `
        <div class="scthree__item">
            <div class="scthree__text">
                <h2>ABOUT US</h2>
                <div class="text_head">Read about our app</div>
            </div>
        </div>
        <div class="scthree__item_about">
            <ul class="scthree__about_icons">
                ${htmlContentAbout}
            </ul>
        </div>
        <div class="scthree__item">
            <div class="scthree__btn">
                <div class="scthree__btn_pink" onclick="">
                Read more
                </div>
                <div class="scthree__btn_or">
                    <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="15" y2="0.5" stroke="#DAE4FE"/>
                    </svg>                
                    OR
                    <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="15" y2="0.5" stroke="#DAE4FE"/>
                    </svg>
                </div>
                <div class="scthree__btn_blue" onclick="">
                Get started
                </div>
            </div>
        </div>
        <div class="scthree__item">
            <div class="scthree__icons">
                <div class="scthree__icon_custom">
                    <div class="scthree__custom_img">
                        <img  
                        src="https://github.com/Oxsana1992/LandingPageTemplate/blob/main/img/Scthree/custom-icon.png?raw=true" alt="customers">
                    </div>
                    <div class="custom__text_big">89%</div>
                    <div class="custom__text">Customers who have increased their productivity</div>
                </div>
                <div class="scthree__icon_users">
                    <div class="scthree__users_img">
                        <img 
                        src="https://github.com/Oxsana1992/LandingPageTemplate/blob/main/img/Scthree/users-icon.png?raw=true" alt="users">
                    </div>
                    <div class="users__text_big">3123</div>
                    <div class="users__text">Users who have used our application</div>
                </div>
            </div>
        </div>
        `;

        const htmlWrapper = `
        <div id="features" class="scthree__container">
           ${htmlContentScThree}
        </div>
    `; 

    ROOT_INDEX3.innerHTML = htmlWrapper;
    }
} 

export default new Three();