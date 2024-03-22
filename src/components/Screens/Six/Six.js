import { API_URL, URL_QUESTIONS } from '../../../constants/api';

import { getDataApi } from '../../../utils/getDataApi'; 

import { ROOT_INDEX6 } from '../../../constants/root';

import './Six.css';
 
class Six {
    async render() {
        const dataQuestions = await getDataApi.getData(API_URL + URL_QUESTIONS); 
        // id, title, text, btnText, link
        let htmlQuestions = '';

        dataQuestions.forEach(({id, title, text, btnText }) => {

            htmlQuestions += `
                <div class="accordion__tab">
                    <input type="checkbox" name="accordion-1" id="${id}" > 
                    <label for="${id}" class="tab__label">${title}</label>
                    <div class="tab__content">
                        <div class="accordion_text">${text}</div>
                        <div class="accordion_btn">${btnText}</div>
                    </div>
                </div>     
            `; 
        });

        const htmlContentScSix = `
            <div class="scsix__item">
                <div class="scsix__icon_text">
                    <h2>Customer help</h2>
                    <div class="text_head">Frequently asked questions</div>
                </div>
            </div>
            <div class="scsix__item">
                <section class="accordion">
                    ${htmlQuestions} 
                </section>                
            </div>
        `;

        const htmlWrapper = `
        <div class="scsix__container">
            ${htmlContentScSix}
        </div>
    `;

    ROOT_INDEX6.innerHTML = htmlWrapper;
    }
}

export default new Six();