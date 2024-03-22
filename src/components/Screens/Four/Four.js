import { API_URL, URL_RESOURCES } from "../../../constants/api";

import { getDataApi } from "../../../utils/getDataApi";

import { ROOT_INDEX4 } from "../../../constants/root";

import "./Four.css";

class Four {
  async render() {
    const dataResources = await getDataApi.getData(API_URL + URL_RESOURCES);
    // imgBig, imgTop, imgBot, header, text
    let htmlContentResources = "";

    dataResources.forEach(({ id, imgBig, imgTop, imgBot, header, text }) => {
      htmlContentResources += `
                <li id="${id}" class="scfour__resources_icon active">
                    <div class="scfour__resources_img">
                        <div class="scfour__resources_img_big">
                            <img class="scfour__img_big" src="${imgBig}" alt="1">
                            <div class="scfour__resources_btn" onclick="">
                                <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="32.6598" cy="32.5001" rx="32.5118" ry="32.473" fill="white"/>
                                <path d="M37.1138 31.0143C37.1138 34.29 34.4548 36.9475 31.1722 36.9475C27.8897 36.9475 25.2307 34.29 25.2307 31.0143C25.2307 27.7386 27.8897 25.0811 31.1722 25.0811C34.4548 25.0811 37.1138 27.7386 37.1138 31.0143Z" stroke="#A7AAC6" stroke-width="2"/>
                                <path d="M36.1304 35.9666L41.0886 40.9189" stroke="#A7AAC6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div class="scfour__resources_img_small">
                            <img class="scfour__img_small" src="${imgTop}" alt="2">
                            <img class="scfour__img_small" src="${imgBot}" alt="3">
                        </div>
                    </div>
                    <div class="scfour__resources_text">
                        <div class="resources_header">${header}</div>
                        <div class="resources_text">${text}</div>
                        <div class="resources_btn">
                            <div class="resources_btn_blue" onclick="">Read now</div>
                            <div class="resources_btn_wight" onclick="">Add to your bookmarks</div>
                        </div>
                    </div>
                </li>
            `;
    });

    const htmlContentScFour = `
            <div class="scfour__item">
                <div class="scfour__text">
                    <h2>OUR RESOURCES</h2>
                    <div class="text_head">Start reading our blog</div>
                </div>
            </div>
            <div class="scfour__item scfour__item_pagination">
                <div class="scfour__gallery">
                    <div class="gallery_btn_left">
                        <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 9.5L2 9.5M2 9.5L9.81132 17M2 9.5L9.81132 2" stroke="#A8B4E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="gallery_icons">
                        <ul class="scfour__resources">
                            ${htmlContentResources}
                        </ul>
                    </div>
                    <div class="gallery_btn_right">
                        <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 9.5H25M25 9.5L17.1887 2M25 9.5L17.1887 17" stroke="#A8B4E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        `;

    const htmlWrapper = `
        <div class="scfour__container">
           ${htmlContentScFour}
        </div>
    `;

    ROOT_INDEX4.innerHTML = htmlWrapper;
  }

  eventListener() {
    const sliderContent = document.querySelector(".scfour__item_pagination");
    const prevButton = document.querySelector(".gallery_btn_left");
    const nextButton = document.querySelector(".gallery_btn_right");
    const itemsPerPage = 1;
    let currentPage = 0;
    const items = Array.from(sliderContent.getElementsByTagName("li"));
    const slideCount = items.length;

    prevButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

    function showPreviousSlide() {
      currentPage = (currentPage - 1 + slideCount) % slideCount;
      showPage(currentPage);
    }

    function showNextSlide() {
      currentPage = (currentPage + 1) % slideCount;
      showPage(currentPage);
    }

    function showPage(page) {
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      items.forEach((item, index) => {
        item.classList.toggle(
          "hidden",
          index < startIndex || index >= endIndex
        );
      });
      updateActiveButtonStates();
    }

    function createPageButtons() {
      const totalPages = Math.ceil(items.length / itemsPerPage);
      const paginationContainer = document.createElement("div");
      const paginationDiv = document.body.appendChild(paginationContainer);
      paginationContainer.classList.add("pagination");

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
        ".pagination .gallery_circle"
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
  }
}

export default new Four();
