import { URL_VIDEO } from '../../../constants/api'; 

import { ROOT_INDEX2 } from '../../../constants/root';

import './Two.css';

class Two {
    async render() {
        const htmlContentScTwo = `
        <div class="sctwo__item">
            <div class="sctwo__icon_text">
                <h2>DESKTOP AND MOBILE APP</h2>
                <h1><span class="title_wieght">Plan</span> and <span class="title_wieght">manage</span></h1>
                <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.</p>
            </div>
            <div class="sctwo__icon_btn">
                <div class="sctwo__view_btn">View video
                    <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2.73354C6.66667 3.11844 6.66667 4.08069 6 4.46559L1.5 7.06367C0.833333 7.44857 0 6.96744 0 6.19764V1.00149C0 0.231691 0.833333 -0.249434 1.5 0.135467L6 2.73354Z" fill="white"/>
                    </svg>
                </div>
                <div class="sctwo__see_btn"><a href="#features">
                See features
                </a>
                </div>
            </div>
        </div>
        <div class="sctwo__item">
            <div class="sctwo__icon_img">
                <div class="sctwo__icon_img1">
                <img src="https://github.com/Oxsana1992/LandingPageTemplate/blob/main/img/Sctwo/img1.png?raw=true" alt="img1" />
                </div>
                <div class="sctwo__icon_img2">
                <img src="https://github.com/Oxsana1992/LandingPageTemplate/blob/main/img/Sctwo/img2.png?raw=true" alt="img2" />
                </div>
                <div class="sctwo__icon_img3">
                <img src="https://github.com/Oxsana1992/LandingPageTemplate/blob/main/img/Sctwo/img3.png?raw=true" alt="img3" />
                </div>
            </div>
        </div>
        `;

        const htmlWrapper = `
            <div id="blog" class="sctwo__container">
                ${htmlContentScTwo}
            </div>
            <div class="sctwo__container wrapper hidden">
                <div class="sctwo__videodisplay">
                    <video src="${URL_VIDEO}"  autoplay='true' loop muted class="sctwo__videodisplay_style"></video>
                    <div class="sctwo__videodisplay_close">
                        X
                    </div>
                </div> 
            </div>
        `; 

        ROOT_INDEX2.innerHTML = htmlWrapper;
    }
    eventListener() {
           // buttonPlayVideo
  const buttonVideo = document.querySelector('.sctwo__view_btn');
  const videoDisplay = document.querySelector('.sctwo__container.wrapper.hidden');
  const videoDisplayClose = document.querySelector('.sctwo__videodisplay_close');


  function buttonPlayVideo() {
    buttonVideo.addEventListener('click', () => {
      videoDisplay.classList.remove('hidden');
      
      buttonCloseVideo();
    })
  }

  function buttonCloseVideo() {
      videoDisplayClose.addEventListener('click', () => {
        videoDisplay.classList.add('hidden');
      })
  }

  buttonPlayVideo();
    }
 
} 

export default new Two();