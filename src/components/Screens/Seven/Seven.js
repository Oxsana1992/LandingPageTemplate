import { ROOT_INDEX7 } from '../../../constants/root';

import './Seven.css';
 
class Seven {
    async render() {
        const htmlContentScSeven = `
            <div id="documentation" class="scseven__item">
                <div class="scseven__icon_text">
                    <div class="scseven__head_wight">PLAN YOUR LIFE</div>
                    <h1 class="text_wight">Get <span class="title_wieght">started</span> now</h1>
                    <div class="scseven__text_wight">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</div>
                    <div class="scseven__btn">
                        <div class="scseven__btn_wight" onclick="">View pricing</div>
                        <div class="scseven__btn_blue" onclick="">Read documentation</div>
                    </div>
                </div>
            </div>
            <div class="scseven__item">
                <div class="scseven__icon_email">
                    <div class="scseven__email_text">
                        <div class="email_header">Sign up for newsletter</div>
                        <div class="email_text">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.</div>
                    </div>
                    <form action="" class="scseven__email_form">
                        <input id="form-email" class="email_form" name="form-email" type="email" placeholder="Email address" />
                        <input type="submit" class="btn_form" value="Save me" />
                    </form>
                </div>
            </div>
        `;

        const htmlWrapper = `
        <div id="pricing" class="scseven__container">
           ${htmlContentScSeven}
        </div>
    `;

    ROOT_INDEX7.innerHTML = htmlWrapper;
    }
}

export default new Seven();