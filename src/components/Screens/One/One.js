import { API_URL, URL_BREND, URL_IMG_GIT, URL_VIDEO } from '../../../constants/api'; 

import { getDataApi } from '../../../utils/getDataApi'; 

import { ROOT_INDEX } from '../../../constants/root';

import './One.css';
 
class One {
    async render() {
        const htmlContentScOne = `
            <div class="scone__item">
                <div class="scone__icon">
                    <div class="scone__gallery">
                        <img class="scone__gallery_img" 
                        src="https://github.com/Oxsana1992/LandingPageTemplate/blob/main/img/Scone/bg_.png?raw=true" alt="1">

                        <img class="scone__gallery_img" 
                        src="https://github.com/Oxsana1992/LandingPageTemplate/blob/main/img/Scone/bgmir.png?raw=true" alt="2">

                        <img class="scone__gallery_img" 
                        src="https://github.com/Oxsana1992/LandingPageTemplate/blob/main/img/Scone/bg_.png?raw=true" alt="3">
                    </div>
                    <div class="scone__videodisplay">
                      <video src="${URL_VIDEO}"  autoplay='true' loop muted class="scone__videodisplay_style"></video>
                      <div class="scone__videodisplay_close">
                          X
                      </div>
                    </div> 
                    
                    <div class="scone__text">
                        <h2>PLAN YOUR LIFE</h2>
                        <h1>Increase your <span class="title_wieght">productivity</span></h1>
                        <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>
                    </div>
                    <div class="scone__video_btn">
                        <img class="scone__video_btn_img" 
                        src="https://github.com/Oxsana1992/LandingPageTemplate/blob/main/img/Scone/play.png?raw=true" alt="play">
                    </div>
                </div>
            </div>
        `;

        const dataBrend = await getDataApi.getData(API_URL + URL_BREND); 
        // title, urlImg, link
        let htmlContentBrend = '';
        
        dataBrend.forEach(({title, urlImg, link}) => {
            const srcBrend = URL_IMG_GIT + urlImg + '?raw=true';
        
            htmlContentBrend += `
                <li class="scone__brend_icon">
                    <a class="scone__brend_link" href="${link}" target="_blank">
                        <img class="scone__brend_img" 
                        src="${srcBrend}" alt="${title}">
                    </a>
                </li>
            `;
        }); 

        const htmlContentScOneBrend = `
            <div class="scone__item">
                <ul class="scone__brend">
                    ${htmlContentBrend}
                </ul>
            </div>
        `;

        const htmlWrapper = `
            <div id="home" class="scone__container">
                ${htmlContentScOne}
                ${htmlContentScOneBrend}
            </div>
        `; 

        ROOT_INDEX.innerHTML = htmlWrapper;
    }

    eventListener() {
        const sliderContent = document.querySelector(".scone__gallery");
        const itemsPerPage = 1;
        let currentPage = 0;
        const items = Array.from(sliderContent.getElementsByTagName("img"));
      
        function showPage(page) {
          const startIndex = page * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          items.forEach((item, index) => {
            item.classList.toggle("hidden", index < startIndex || index >= endIndex);
          });
          updateActiveButtonStates();
        }
      
        function createPageButtons() {
          const totalPages = Math.ceil(items.length / itemsPerPage);
          const paginationContainer = document.createElement("div");
          const paginationDiv = document.body.appendChild(paginationContainer);
          paginationContainer.classList.add("scone__gallery_circle");
      
          for (let i = 0; i < totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.addEventListener("click", () => {
              currentPage = i;
              showPage(currentPage);
              updateActiveButtonStates();
            });
            sliderContent.appendChild(paginationContainer);
            paginationDiv.appendChild(pageButton);
            pageButton.classList.add("gallery_circle");
          }
        }
      
        function updateActiveButtonStates() {
          const pageButtons = document.querySelectorAll(
            ".scone__gallery_circle .gallery_circle"
          );
          pageButtons.forEach((button, index) => {
            if (index === currentPage) {
              button.classList.add("active");
            } else {
              button.classList.remove("active");
            }
          });
        }
      
        createPageButtons();
        showPage(currentPage);

        // buttonPlayVideo
  const buttonVideo = document.querySelector('.scone__video_btn');
  const videoDisplay = document.querySelector('.scone__videodisplay');
  const videoDisplayClose = document.querySelector('.scone__videodisplay_close');


  function buttonPlayVideo() {
    buttonVideo.addEventListener('click', () => {
      buttonVideo.classList.add('hidden');
      videoDisplay.classList.add('active');
      sliderContent.classList.add('hidden');

      buttonCloseVideo();
    })
  }

  function buttonCloseVideo() {
      videoDisplayClose.addEventListener('click', () => {
        buttonVideo.classList.remove('hidden');
        videoDisplay.classList.remove('active');
        sliderContent.classList.remove('hidden');
      })
  }

  buttonPlayVideo();
    }
} 

export default new One();